import React, {useEffect, useState} from 'react';
import './App.scss';
import Animation from "./Components/Animation/Animation";
import NavigationBar from './Components/Navbar/Navbar';
import Buildings from './Components/Buildings/Buildings';
import Footer from './Components/Footer/Footer';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Rooms from './Components/Rooms/Rooms';



function App() {
  // 👇 add class to body element
  useEffect(() => {
    document.body.classList.add('body-animation'); 
  }, []);
  //getting the clicked building link tag
  const [getClickedBuilding, setGetClickedBuilding] = useState({})

  return (
    <div className="app container-lg-fluid px-0 position-relative">
      <Animation />
      <NavigationBar />
      <Buildings 
         setGetClickedBuilding = {setGetClickedBuilding}
      />
      <Rooms 
        clickedHouseData= {getClickedBuilding}

      />
      <Footer />
    </div>
  );
}

export default App;
