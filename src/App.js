import React from 'react';
import './App.css' 
import Grid from './components/Grid';
import NavBar from './components/Navbar';
import CardList from './components/Card';
import MainPhoto from './images/katie-zaferes.png';
import Weddingphoto from './images/wedding-photography.png' ; 
import Mountainphoto from './images/mountain-bike.png';
import Star from'./images/star.png';



function App() {
  return (
  <div>
    <NavBar/>
    <Grid />
    <section className='cards-list'>
    <CardList  
    Img={MainPhoto}
    Str={Star}
    Rating="5.0"
    Review={6}
    location= "Online"
    openSpots= {0}
    title="Life Lessons with Katie Zaferes"
    price={136}
    />
    <CardList
   Img={Weddingphoto}
   Str={Star}
   Rating="5.0"
   Review={32}
   location= "Online"
   openSpots= {35}
   title="Learn Wedding Photography"
   price={125}
    />
    <CardList
    Img={Mountainphoto}
    Str={Star}
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
