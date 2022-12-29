import React, { useEffect, useRef, useState } from "react";
import "./BuildingGoogleMap.scss";
import mapboxgl from "mapbox-gl";
import { distance as turf } from "@turf/turf";
import BuildingsList from "../../assets/APIs/BuildingsList.json";
import currentLocIcon from "../../assets/img/current-loc.png";
import buildingLocIcon from "../../assets/img/building-loc.png";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

export default function Maps() {
  const [active, setActive] = useState("");
  const [center, setCenter] = useState([-1.9507, 30.0663]);
  const [haveBuildingsLocation, setHaveBuildingsLocation] = useState(false);
  const [otherLocations, setOtherLocations] = useState([]);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(30.0663);
  const [lat, setLat] = useState(-1.9507);
  const [zoom, setZoom] = useState(15);
  const start = [lng, lat];

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    route();
  }, [map.current, navigator.geolocation]);

  const locate = () => {
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        style: {
          right: 10,
          top: 10,
        },
        position: "bottom-left",
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      })
    );
  };

  function toPoint(lng, lat) {
    return {
      type: "Point",
      coordinates: [lng, lat],
    };
  }

  const route = async () => {
    await Promise.all(
      BuildingsList.map(async (building) => {
        setOtherLocations([
          ...otherLocations,
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [building.location.long, building.location.lat],
            },
          },
        ]);
      })
    );

    console.log(otherLocations);
    locate();
    map.current.on("load", () => {
      // make an initial directions request that
      // starts and ends at the same location
      // getRoute(start);

      // Add starting point to the map
      map.current.addLayer({
        id: "point",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: start,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#3887be",
        },
      });

      // add other building locations

      map.current.addLayer({
        id: "locations",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: otherLocations,
          },
        },
        paint: {
          "circle-radius": 5,
          "circle-color": "#F48225",
        },
      });

      map.current.on("click", (event) => {
        // Calculate the distance between the current location and the clicked location
        const distance = turf(
          toPoint(lng, lat),
          toPoint(event.lngLat.lng, event.lngLat.lat),
          {
            units: "meters",
          }
        );

        // Set a threshold distance (in meters)
        const threshold = 40; // 40 meters

        if (distance <= threshold) {
          new mapboxgl.Popup()
            .setHTML("<p>This is your current location</p>")
            .setLngLat([lng, lat])
            .addTo(map.current);
          return;
        }
        const coords = Object.keys(event.lngLat).map(
          (key) => event.lngLat[key]
        );
        const end = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: coords,
              },
            },
          ],
        };
        if (map.current.getLayer("end")) {
          map.current.getSource("end").setData(end);
        } else {
          map.current.addLayer({
            id: "end",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: coords,
                    },
                  },
                ],
              },
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#f30",
            },
          });
        }
        getRoute(coords);
      });
    });
  };

  async function getRoute(end) {
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
      { method: "GET" }
    );
    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;
    const geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };
    // if the route already exists on the map, we'll reset it using setData
    if (map.current.getSource("route")) {
      map.current.getSource("route").setData(geojson);
    }
    // otherwise, we'll make a new request
    else {
      map.current.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3887be",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }
    // get the sidebar and add the instructions
    const instructions = document.getElementById("instructions");
    const steps = data.legs[0].steps;

    let tripInstructions = "";
    for (const step of steps) {
      tripInstructions += `<li>${step.maneuver.instruction}</li>`;
    }
    instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
      data.duration / 60
    )} min 🚴 </strong></p><ol>${tripInstructions}</ol>`;
  }

  // request user location enabling
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          return;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      alert("Better to enable your location for best way to follow.");
      console.log("geolocation is not enabled");
    }
  }, []);

  const handleBuildingClick = (building, id) => {
    setActive(id);
    setCenter([building.location.lat, building.location.long]);
  };
  const buildings = BuildingsList.map((building, i) => (
    <li
      key={i}
      className={active === i ? "active list-group-item" : " list-group-item"}
      onClick={() => handleBuildingClick(building, i)}
    >
      {building.name}
    </li>
  ));

  return (
    <div className=" container-fluid map  mt-4 mb-5">
      <h3 className="h2 my-4 text-dark titles-buildings fw-bold w-100 text-center">
        {" "}
        CST Map
      </h3>
      <div className="row ">
        <div className="col-2 col-md-3 bg-light buildings-box">
          <p className="fw-bold my-3">All CST Buildings</p>
          <ul className="list-group w-100 m-0 p-0 box">{buildings}</ul>
        </div>
        <div className="col-10 col-md-9 map-box">
          <div ref={mapContainer} className="map-container" />
          <div id="instructions" className="instructions"></div>
        </div>
      </div>
    </div>
  );
}
