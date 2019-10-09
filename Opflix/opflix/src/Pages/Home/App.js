import React from 'react';
import logo from '../../assets/img/logo_opflix.png';
import pipoca from '../../assets/img/popcorn.png';
import './App.css';



function App() {
  return (
    <div className="App">
    <img src={pipoca}></img>
   <img src={logo}/>
    </div>
  );
}

export default App;
