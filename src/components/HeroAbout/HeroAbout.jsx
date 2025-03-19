import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import NextSlide from './../../assets/arrow2.png';  
import "./../../components/HeroAbout/HeroAbout.css";
import "./HeroAbout.css";
import { Link,ScrollLink } from "react-scroll";


export default function HeroAbout() {
  const [index, setIndex] = useState(0); 
  const [isExpanded, setIsExpanded] = useState(false);

  const movetoNextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3); 
  };

 

  const fullText = "I am Dr. Steven Johnson, born in the city of London, England, and my roots trace back to the beautiful countryside of Yorkshire. By the grace of God, I opened my clinic in the heart of New York City, near the famous Central Park. I offer many dental treatments at a semi-symbolic price, whether conservative treatment, endodontics, fixed prostheses, removable prostheses, dental implants, orthodontics, or cosmetic veneers, in my clinic located on Walter Grove Street.";
  const fullText2 = "I studied at the Faculty of Dentistry at harvard  University and graduated in 2024 with a GPA of 66%.";
  const fullText3 = "I have two years experience in providing dental treatments";

  const maxChars = 100;
  const maxCharsForScroll = 150;

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const mycolor=localStorage.getItem('color')
  let colorHeroAbout;
  {mycolor == "#FFFFFF" ? colorHeroAbout="#000000" : colorHeroAbout="#FFFFFF"}
  

  return (
    <>
    
    <section>
    <Carousel activeIndex={index} onSelect={setIndex} controls={false} indicators={false} interval={null}>
      <Carousel.Item>
        <div className="HeroAbout">
          <div className="d-flex flex-column w-50 HeroAboutContent">
            <div className="d-flex justify-content-between w-100 HeroAboutContentPart1">
              <h2 style={{ fontWeight: "1000",color:colorHeroAbout}}>
                Who Is me
              </h2>
              <img 
                src={NextSlide} 
                style={{ fontSize: "36px" ,width:"60px",height:"60px"}} 
                onClick={movetoNextSlide} 
              />
            </div>
            <div className="HeroAboutContentPart2">
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    maxHeight: fullText.length > maxCharsForScroll && isExpanded ? "200px" : "auto",
                    minHeight:"200px",
                    overflowY: fullText.length > maxCharsForScroll && isExpanded ? "scroll" : "visible",
                    marginBottom: "30px",
                    color:colorHeroAbout
                  }}
                  className="text-container"
                >
                  {isExpanded ? fullText : `${fullText.slice(0, maxChars)}...`}
                </div>
         
                {fullText.length > maxChars && (
                  <button onClick={handleToggleExpand} className="btn-ShowMore" style={{color:colorHeroAbout}}>
                    {isExpanded ? "show less ": "show more"}
                  </button>
                )}
                <style jsx>{`
                  .text-container::-webkit-scrollbar {
                    width: 4px;
                  }
                  .text-container::-webkit-scrollbar-thumb {
                    background-color: red;
                    border-radius: 10px;
                  }
                  .text-container::-webkit-scrollbar-track {
                    background-color: transparent;
                  }
                  .text-container {
                    
                    scrollbar-width: thin;
                    scrollbar-color: red transparent;
                  }
                `}</style>
          
              </div>
      
            </div>
          </div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="HeroAbout">
          <div className="d-flex flex-column w-50 HeroAboutContent">
            <div className="d-flex justify-content-between w-100 HeroAboutContentPart1">
              <h2 style={{fontWeight: "1000" ,color:colorHeroAbout}}>
                Education
              </h2>
              <img 
                src={NextSlide} 
                style={{ fontSize: "36px",width:"60px",height:"60px"}} 
                onClick={movetoNextSlide} 
              />
            </div>
            <div className="HeroAboutContentPart2">
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    maxHeight: fullText2.length > maxCharsForScroll && isExpanded ? "200px" : "auto",
                    minHeight:"200px",
                    overflowY: fullText2.length > maxCharsForScroll && isExpanded ? "scroll" : "visible",
                    marginBottom: "30px",
                    color:colorHeroAbout
                  }}
                  className="text-container"
                >
                  {isExpanded ? fullText2 : `${fullText2.slice(0, maxChars)}...`}
                </div>
         
                {fullText2.length > maxChars && (
                  <button onClick={handleToggleExpand} className="btn-ShowMore">
                    {isExpanded ? "عرض أقل" : "عرض المزيد"}
                  </button>
                )}
                <style jsx>{`
                  .text-container::-webkit-scrollbar {
                    width: 4px;
                  }
                  .text-container::-webkit-scrollbar-thumb {
                    background-color: red;
                    border-radius: 10px;
                  }
                  .text-container::-webkit-scrollbar-track {
                    background-color: transparent;
                  }
                  .text-container {
                    scrollbar-width: thin;
                    scrollbar-color: red transparent;
                  }
                `}</style>
          
              </div>
         
            </div>
          </div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="HeroAbout">
          <div className="d-flex flex-column w-50 HeroAboutContent">
            <div className="d-flex justify-content-between w-100 HeroAboutContentPart1">
              <h2 style={{ fontWeight: "1000" ,color:colorHeroAbout}}>
                Experience
              </h2>
              <img 
                src={NextSlide} 
                style={index === 2 ? { fontSize: "36px", rotate: "3.2rad",width:"60px",height:"60px" } : {fontSize: "36px",width:"60px",height:"60px" }} 
                onClick={movetoNextSlide}
              />
            </div>
            <div className="HeroAboutContentPart2">
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    maxHeight: fullText3.length > maxCharsForScroll && isExpanded ? "200px" : "auto",
                    minHeight:"200px",
                    overflowY: fullText3.length > maxCharsForScroll && isExpanded ? "scroll" : "visible",
                    marginBottom: "30px",
                    color:colorHeroAbout
                  }}
                  className="text-container"
                >
                  {isExpanded ? fullText3 : `${fullText3.slice(0, maxChars)}...`}
                </div>
              
                {fullText3.length > maxChars && (
                  <button onClick={handleToggleExpand} className="btn-ShowMore">
                    {isExpanded ? "عرض أقل" : "عرض المزيد"}
                  </button>
                  
                )}
                <style jsx>{`
                  .text-container::-webkit-scrollbar {
                    width: 4px;
                  }
                  .text-container::-webkit-scrollbar-thumb {
                    background-color: red;
                    border-radius: 10px;
                  }
                  .text-container::-webkit-scrollbar-track {
                    background-color: transparent;
                  }
                  .text-container {
                    scrollbar-width: thin;
                    scrollbar-color: red transparent;
                  }
                `}</style>
            
              </div>
             
            </div>
          
          </div>
        
        </div>
       
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
 
 
   </>
  );
}

/*import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;*/