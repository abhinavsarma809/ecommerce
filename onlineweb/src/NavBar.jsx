import React from 'react'
import {useState} from 'react';
import './App.css';
const NavBar = () => {
  const [cat,setCat]=useState(false);

  const handleClick=()=>{
    setCat(true);
    setTimeout(() => {
      setCat(false);
    },5000);
  }

  return (
    <div class='container'>
      <img src='a.png' id='demo' alt='amazonlogo' />
     
      <blockquote>
      <button class="lock">location</button>
      </blockquote>  

      {cat &&
        <div class='display'>
          <a href='/' id='disk'>All<br/>
          </a>
          <a href='/' id='sd'>
          Appliances <br/></a>
          <a href='/' id='sd1'>
          Apps&Games <br/></a>
          <a href='/' id='sd2'>
          BabyCare <br/></a>
          <a href='https://www.amazon.in/b?node=1571271031' id='sd3'>
         Clothes & Personal <br/></a>
         <a href='/' id='sd4'>
         Sports <br/></a>
         <a href='/' id='sd5'>
         CellPhones <br/></a>
         <a href='/' id='sd6'>
        Books <br/></a>

          
          
         
          
       
        


        </div>
}
     
        <label for='html'>
          <div className="button-wrapper">
          <button onClick={handleClick} id='fashion' >All Catoriges</button>
          </div>
        </label>
        <input type='search' id='search' placeholder ='Search in' />
        <button type='button' id='searchbox' ><img src='search.png' id='searrch' /></button>

      <img src='India.png' id='ind'/>
      <p id='hind'>En</p>

    {/*<img src='drop-down.png' id='arrow'></img>*/}
       <p id ='log'>LOGIN/SIGN UP</p>
      <button id='logsign'><img src="user.jpeg" id='sign' /></button>
     < a href="#" id="return">return<br/>& orders</a>
     

    </div>
   
  )
}

export default NavBar;
