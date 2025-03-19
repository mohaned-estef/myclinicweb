import React, { useState, useEffect } from 'react';
import "./PopularAbout.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Skills from './../../components/SkillsAbout/SkillsAbout'
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

// إعداد المكتبة
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
import ParticlesBackground from "./../../pages/Experience/Experience";
import ExampleCarouselImage from './../../assets/tooth3.jpg';
import Tooth3 from "./../../assets/tooth3.jpg";
import Photo1 from "./../../assets/endo.png";
import Photo2 from "./../../assets/fixed.png";
import Photo3 from "./../../assets/conservative.png";
import Photo4 from "./../../assets/removable.png";
import Photo5 from "./../../assets/extract.png";
import Photo6 from "./../../assets/Apex.png"
import Photo7 from "./../../assets/Xray.png"
import Photo8 from "./../../assets/rotary.png"



export default function PopularAbout() {
  
  const maxCharsForScroll = 100;
  const maxCharsForScrollTitle=15;


  const ApexTechnique="The Apex Locator is a medical device used in dental clinics and is considered one of the essential tools in endodontic treatment. It is specifically used to accurately determine the length of the root canal during root canal treatment, which helps improve the accuracy of treatment and reduces errors "
  const RotaryTechnique="The rotary device used in dental clinics is an electrical device used in dental treatment, especially in root canal treatment procedures. This device is an essential tool for the doctor to perform operations with high accuracy and efficiency."
  const XrayTechnique="The X-ray machine used in dental clinics is an essential tool for diagnosing and treating many dental conditions. This device is used to produce images of the internal parts of the teeth and mouth, which helps to identify problems that cannot be seen with a regular examination."


  const dataTechniques=[

    {
      id: 1,
      title: "Apex",
      desc: ApexTechnique,
      myimg:Photo6,
    },
    {
      id: 2,
      title: "Rotary",
      desc: RotaryTechnique,
      myimg:Photo8,
    },
    {
      id: 3,
      title: "Xray",
      desc: XrayTechnique,
      myimg:Photo7,
    },

  ]

  const fullText = "My mission is to provide all dental treatments to our patients at reasonable prices. I work to provide the latest technologies in dental treatment, including Apex, Watari, and X-rays in the clinic, with a comfortable atmosphere for patients in the clinic and necessary supplies for them, including an oxygen tank, first aid medications, and others for use in emergency cases.";
  const fullText2 = "I look forward to raising the value of medical content in my country and elevating the status of public health";
  const fullText3 = "I have two years experience in providing dental treatments";

  const dataHome = [
    {
      id: 1,
      title: "My Mission",
      desc: fullText,
    },
    {
      id: 2,
      title: "My Vision",
      desc: fullText2,
    },
    {
      id: 3,
      title: "My Values",
      desc: fullText3,
    },
  ];

  const paragraph1 = "Endodontic treatment is a treatment procedure that aims to treat tooth decay in children. The treatment involves removing the tissue affected by the decay, then cleaning and sterilizing the teeth. After that, the teeth are filled using special materials to ensure that their functions are restored and they are protected from pain or infection, which helps maintain oral health.";
  const paragraph2 = "Fixed prostheses are devices used to replace missing or damaged teeth, such as crowns and bridges. These prostheses are permanently attached to the original teeth or implants, helping to restore normal oral functions, such as chewing and speaking. These solutions are effective in improving appearance and aesthetics and ensuring long-term patient comfort";
  const paragraph3 = "Conservative treatment aims to preserve teeth and prevent tooth decay.gh";
  const paragraph4 = "Dentures are medical solutions used to replace missing or damaged teeth, including partial and complete dentures. They are easy to remove and clean, providing comfort to the patient and restoring normal oral functions.";
  const paragraph5 = "Tooth extraction is a surgical procedure in which a tooth is removed from its place in the jaw. It is used in cases of severe decay, gum inflammation, or to widen the space for orthodontic teeth, and it can also be due to an abscess or chronic gum disease.";

  const [timebyms, settimebyms] = useState(80000);
  const [timebyms2, settimebyms2] = useState(1);
  const [numberPatients2, setnumberPatients2] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [selectedTab, setSelectedTab] = useState(""); 
  const [index, setIndex] = useState(0);

  const data = [
    {
      id: 1,
      img: Photo1,
      title: "Endodontic treatment",
      desc: paragraph1,
      numberPatients: 200,
      color:"green",
    },
    {
      id: 2,
      img: Photo2,
      title: "Fixed dental prostheses",
      desc: paragraph2,
      numberPatients: 20,
      color:"yellow"
    },
    {
      id: 3,
      img: Photo3,
      title: "Conservative dental ",
      desc: paragraph3,
      numberPatients:30,
      color:"red"
    },
    {
      id: 4,
      img: Photo4,
      title: "Removable dental prostheses",
      desc: paragraph4,
      numberPatients: 40,
      color:"blue"
    },
    {
      id: 5,
      img: Photo5,
      title: "Tooth extraction",
      desc: paragraph5,
      numberPatients: 4,
      color:"orange"
    }
  ];

  const [currentIndex, setcurrentIndex] = useState(0);
  const [currentIndex2, setcurrentIndex2] = useState(0);
  const [numberPatients, setnumberPatients] = useState(0);
  const [currentId, setcurrentId] = useState(1);

const nextSlide = () => {
    setcurrentId((prev) => (prev + 1) % data.length);
    setcurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
};

const prevSlide = () => {
    setcurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    settimebyms((prev) => prev + 8000); // يمكنك تعديل هذا الجزء إذا لزم الأمر
};

// تعديل دوال التنقل بين تقنيات الـ Carousel
const nextSlideTechnique = () => {
    setcurrentIndex2((prevIndex2) => (prevIndex2 + 1) % dataTechniques.length);
};

const prevSlideTechnique = () => {
    setcurrentIndex2((prevIndex2) => (prevIndex2 - 1 + dataTechniques.length) % dataTechniques.length);
};

  
  const currentSlide = data[currentIndex];

  useEffect(() => {
    let incrementer;
    const targetPatients = currentSlide.numberPatients;

    if (numberPatients < targetPatients) {
      incrementer = setInterval(() => {
        setnumberPatients((prev) => {
          if (prev < targetPatients) {
            return prev + 1;
          }
          clearInterval(incrementer); 
          return prev;
        });
      }, 50);
    }

    return () => clearInterval(incrementer);
  }, [currentSlide.numberPatients, currentIndex, numberPatients]);

  useEffect(() => {
    setnumberPatients(0);
  }, [currentIndex]);

  const [totalPatients, setTotalPatients] = useState(0);

// استخدام useEffect لحساب totalPatients
useEffect(() => {
  const total = data.reduce((sum, item) => sum + item.numberPatients, 0);
  setTotalPatients(total);
}, [data]);  // سيتم حساب totalPatients كلما تغيرت البيانات

const dataChar = {
  labels: data.map(item => item.title),
  datasets: [
    {
      data: data.map(item => (totalPatients > 0 ? (item.numberPatients * 100) / totalPatients : 0)),  // الحماية إذا كانت totalPatients 0
      backgroundColor: data.map(item => item.color),
      hoverBackgroundColor: data.map(item => item.color),
    },
  ],
};
const mycolor=localStorage.getItem('color')
let colorPopularAbout;
{mycolor == "#FFFFFF" ? colorPopularAbout="#000000" : colorPopularAbout="#FFFFFF"}

  

  return (

    <>
    
    <div className="PopularAbout container-fluid" style={{color:colorPopularAbout}}>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            {dataHome.map((key, index) => {
              return (
                <Accordion.Item eventKey={String(key.id)} className="text-container" key={index}>
                  <Accordion.Header>
                    <h6 style={{ fontSize: "14px", fontWeight: "400" }}>{key.title}</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    {key.desc.length > maxCharsForScroll ? (
                      <div
                        style={{
                          fontSize: "16px",
                          maxHeight: key.desc.length > maxCharsForScroll ? "80px" : "auto",
                          overflowY: key.desc.length > maxCharsForScroll ? "scroll" : "visible",
                          color:colorPopularAbout
                        }}
                        className="text-container"
                      >
                        {key.desc}
                      </div>
                    ) : (
                      <div
                        style={{
                          fontSize: "16px",
                          color:colorPopularAbout
                          
                        }}
                        className="text-container"
                      >
                        {key.desc}
                      </div>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
              {console.log("sf")}
              <section className='mainStatics'>
                <div id="Recent" className="PopularRecentAbout w-100">
                  <div className="PopularContentAbout ">
                    <h2 style={{  fontSize: "46px" }}>Patient statistics </h2>
                    <div className="Popular-cards">
                      <button onClick={prevSlide} className="prev-button2 btn" style={{color:colorPopularAbout}}>
                        Prev
                      </button>
                      <div className="Popular-CardWrapper d-flex justify-content-center align-items-center mb-5">
                        <div className="Popular-Card w-100 mb-5 ">
                          <h2 >Number of visiting patients</h2>
                          <div className="numberPatients">
                          {currentSlide.title.length > maxCharsForScrollTitle ? (<h4 className="text-container" style={{ color: "green", fontSize: "28px" ,
                          
                                maxHeight: currentSlide.title.length > maxCharsForScrollTitle ? "60px" : "auto",
                                overflowY: currentSlide.title.length > maxCharsForScrollTitle ? "scroll" : "visible",
                                
                              
                              }}>{currentSlide.title}</h4>
                            )
                          :(
                            <h4 style={{ color: "green", fontSize: "16px",
                              
                              maxHeight: "60px",
                              overflowY: "visible",
                            
                              
                            
                            }}>{currentSlide.title}</h4>
                            
                          )
                          }
                            
                            <h3 style={{ fontFamily: "yourfont", fontSize: "36px" }}>{numberPatients}</h3>
                          </div>

                          {currentSlide.desc.length > maxCharsForScroll ? (
                            <div  style={{
                          
                              maxHeight: currentSlide.desc.length > maxCharsForScroll ? "160px" : "auto",
                              overflowY: currentSlide.desc.length > maxCharsForScroll ? "scroll" : "visible",
                              
                            
                            }}
                            
                              className="text-container"
                            >
                              {currentSlide.desc}
                            </div>
                          ) : (
                            <div
                              style={{
                                fontSize: "16px",
                                minHeight:"160px",
                                maxHeight: "200px",
                                overflowY: "visible",
                                
                              
                              }}
                              className="text-container"
                            >
                              {currentSlide.desc}
                            </div>
                          )}

                      <div className="next">
                        <button onClick={nextSlide} className="btn  next-button2" style={{color:colorPopularAbout}}>
                          Next
                        </button>
                      </div>
                        </div>
                       
                      </div>
                     
                    </div>
                  </div>
                  <div className='dataChars'>
                    <h2>Patient statistics Char</h2>
                    <Doughnut data={dataChar}/>
                  </div>
                </div>

                <div className='w-100 d-flex justify-content-center'>
                  <Skills/>
                </div>
              
              </section>
      
        <section>
                <div className="PopularTechniquesAbout">
                  <h2 style={{ fontSize: "24px" }}>Dental clinic equipment</h2>
                  <div className="PopularTechniques-cards">
                    <button onClick={prevSlideTechnique} className="prev-button2 btn" style={{color:colorPopularAbout}}>Prev</button>
                    <div className="PopularTechniques-CardWrapper d-flex justify-content-center align-items-center">
                      {/* عرض العنصر بناءً على الفهرس (index) */}
                      <div className="PopularTechniquesFeatures-Card ">

                        <h2 >{dataTechniques[currentIndex2].title}</h2>
                        <img src={dataTechniques[currentIndex2].myimg} style={{height:"180px" ,width:"180px"}} />
                        {dataTechniques[currentIndex2].desc.length > maxCharsForScroll ? (
                          <div className="d-flex flex-column ">
                            <h5>Features</h5>
                            <div
                              style={{
                                fontSize: "16px",
                                maxHeight: dataTechniques[currentIndex2].desc.length > maxCharsForScroll ? "100px" : "auto",
                                overflowY: dataTechniques[currentIndex2].desc.length > maxCharsForScroll ? "scroll" : "visible",
                              }}
                              className="text-container"
                            >
                              <h5>{dataTechniques[currentIndex2].desc}</h5>
                            </div>
                          </div>
                        ) : (
                          
                          <div
                            style={{
                              fontSize: "16px",
                              maxHeight: "40px",
                              overflowY: "visible",
                            }}
                            className="text-container"
                          >
                            {dataTechniques[currentIndex2].desc}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="next">
                      <button onClick={nextSlideTechnique} className="next-button2 btn" style={{color:colorPopularAbout}}>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </section>

       
     
    </div>
    </>
  );
  
}
