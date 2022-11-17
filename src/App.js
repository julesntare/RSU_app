import React, {useEffect} from 'react';
import './App.scss';
import Animation from "./Components/Animation/Animation";
import NavigationBar from './Components/Navbar/Navbar';
import Buildings from './Components/Buildings/Buildings';
import Footer from './Components/Footer/Footer';


function App() {
  // 👇 add class to body element
  useEffect(() => {
    document.body.classList.add('body-animation');
    
  }, []);


  return (
    <div className="app container-lg-fluid px-0 position-relative">
      <Animation />
      <NavigationBar />
      <Buildings />
      <Footer />
    </div>
  );
}

export default App;
