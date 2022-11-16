import React from 'react';
import './App.scss';
import NavigationBar from './Components/Navbar/Navbar';
import Buildings from './Components/Buildings/Buildings';


function App() {
  return (
    <div className="app container bg-secondary">
      <NavigationBar />
      <Buildings />
    </div>
  );
}

export default App;
