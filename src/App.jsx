
import NavBar from "./components/NavBar/NavBar"

import Footer from "./components/Footer/Footer"

import { Routes,Route } from "react-router-dom"

import Home from "./pages/Home/Home"

import About from "./pages/About/About";

import Services from "./pages/Services/Services";

import ParticlesBackground from "./pages/Experience/Experience"


export default function App() {
  const mycolor = localStorage.getItem("color") || "#000000"; 

  return (
    
    <>   

    <ParticlesBackground color={mycolor}/>
    
 
    <NavBar showIcons={true}/>

      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<About/>}/>

        <Route path="/service" element={<Services/>}/>
        
      </Routes>

    <Footer/>
      
    </>

  )
}

/*
*/