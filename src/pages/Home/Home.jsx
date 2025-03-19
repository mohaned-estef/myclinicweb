
import Hero from "./../../components/Hero/Hero"
import Popular from "./../../components/Popular/Popular"
import Discount from "../../components/Discount/Discount"
import Opinions from "../../components/Opinions/Opinions"
import SpaceBackground from "./../Experience/Experience"
import Background from "three/src/renderers/common/Background.js"
import  ParticlesBackground from "./../Experience/Experience"
import NavBar from "./../../components/NavBar/NavBar"
import Footer from "./../../components/Footer/Footer"
export default function Home() {

  let light=true;
  return (
    <>
    

        <Hero title={"welcome to my dental clinic"} btn ={true} arrowBtn={true}/>

        <Discount/>

        <Opinions/>

    
    </>
  )
}
/*   <Hero title={"this is mohaned"} btn ={true}/>
        <Popular/>
        <Recent/>
        */