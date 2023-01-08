import React from 'react';
import './App.css' 
import Grid from './components/Grid';
import NavBar from './components/Navbar';
import CardList from './components/Card';


function App() {
  return (
  <div>
    <NavBar/>
    <Grid />
    <CardList/>
  </div>

  );
}

export default App;
