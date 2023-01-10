import React from 'react';
import './App.css' 
import NavBar from './components/Navbar';
import Grid from './components/Grid';
import CardList from './components/Card';

function App() {
  return (
  <div>
    <NavBar/>
     <Grid /> 
  <section className='cards-list'>
  <CardList  
    Img= "images/katie-zaferes.png"
    Str= "images/star.png"
    Rating="5.0"
    Review={6}
    location= "Online"
    openSpots= {0}
    title="Life Lessons with Katie Zaferes"
    price={136}
  />
     <CardList
   Img= "images/wedding-photography.png"
   Str= "images/star.png"
   Rating="5.0"
   Review={32}
   location= "Online"
   openSpots= {35}
   title="Learn Wedding Photography"
   price={125}
    />
    <CardList
    Img="images/mountain-bike.png"
    Str="images/star.png"
    Rating="4.8"
    Review={2}
    location= "Offline"
    openSpots={12}
    title="Group Mountain Biking"
    price={50}
     />
   </section> 
  </div>

  );
}

export default App;
