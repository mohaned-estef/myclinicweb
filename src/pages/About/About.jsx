
import { Navbar } from 'react-bootstrap'

import "./../../components/HeroAbout/HeroAbout"
import HeroAbout from '../../components/HeroAbout/HeroAbout';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // تأكد من استيراد الـ CSS الخاص بـ Bootstrap
import PopularAbout from '../../components/PopularAbout/PopularAbout';
import SkillsAbout from '../../components/SkillsAbout/SkillsAbout';
import  ParticlesBackground from "./../Experience/Experience"
import NavBar from "./../../components/NavBar/NavBar"
import Footer from "./../../components/Footer/Footer"

export default function UncontrolledExample() {

  let light=false;
  return (
    <>

    <HeroAbout/>
    <PopularAbout/>


    </>
  );
}

/*
import React, { useEffect, useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import './About.css'

import { Link } from 'react-router-dom'


export default function About() {

  const [open , setopen] = useState(false)

function HandelOpening ()  
 {
    setopen(!open)
   }
  return (
    <>
      <Hero Title={'About'} x={false}/>
     <button className='Btn' onClick={() => HandelOpening()}>{!open ? 'open' : 'close'}</button> 
       <div className={open ? 'Active' : 'desActive'}>
        <div className='PopUp'>
          <h3>Do You Wont TO Say Hello</h3>
          <div>
            <button><Link to={'/'}>Yes</Link></button>
            <button  onClick={() => setopen(false)}>No</button>
          </div>
        </div>
      </div> 
    </>
  )
}

*/
