import React, {useEffect, useState} from 'react';
import './App.scss';
import Animation from "./Components/Animation/Animation";
import NavigationBar from './Components/Navbar/Navbar';
import Buildings from './Components/Buildings/Buildings';
import Footer from './Components/Footer/Footer';
import Rooms from './Components/Rooms/Rooms';



function App() {
  // 👇 add class to body element
  useEffect(() => {
    document.body.classList.add('body-animation'); 
  }, []);
  //getting the clicked building link tag
  const [getClickedBuilding, setGetClickedBuilding] = useState({})
  const [showRooms, setShowRooms] = useState(true); //you can see rooms on click

  // console.log("from app.js", getClickedBuilding)
  // const [showIcon, setShowIcon] = useState(false);
  // let count = 0
  // const handleClickOutside = (event) => {

  //   setShowIcon(true);

  //   showIcon? count++: count = 0;
  //   console.log("clicked: ", count);
  // };
  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside, true);
  //   return () => document.removeEventListener('click', handleClickOutside, true);
    
    
  // },[showIcon]);
  



  return (
    <div className="app container-lg-fluid position-relative">
      <Animation />
      <NavigationBar />
      <Buildings 
         setGetClickedBuilding = {setGetClickedBuilding} //get clicked building rooms
        allowRoomsRerender = {setShowRooms} //at nth click you will see rooms
      />
      <Rooms 
        clickedHouseData= {getClickedBuilding} //fetch data rooms clicked  building
        allowRoomsRerender = {showRooms} //give news if allowed to see rooms
        closeRoomsTab = {setShowRooms} // will turn false when you click on close btn and them rooms off 

      />
      <Footer />
    </div>
  );
}

export default App;
