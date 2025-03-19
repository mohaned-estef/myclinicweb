import React from 'react'
import "./Discount.css"
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import Photo3 from "./../../assets/implant.png";
import Photo4 from "./../../assets/fixed.png";
import Photo5 from "./../../assets/feneer.png";
import { Button, Spinner } from 'react-bootstrap';
import ParticlesBackground from "./../../pages/Experience/Experience"

export default function Discount() {

  const mycolor=localStorage.getItem('color')
  let colorDiscount;
  {mycolor == "#FFFFFF" ? colorDiscount="#000000" : colorDiscount="#FFFFFF"}
  


    const maxCharsForScroll=100;

    const dataDiscounts=[{
        id:1,
        title:"Fixed",
        desc:"Special Discount on Fixed Prosthodontics! We are excited to announce a limited-time discount on all fixed prosthodontics services at our dental clinic! Whether you need crowns, bridges, or other dental restorations, we are here to help you restore both your smile and confidence at an affordable price.Take advantage of this exclusive offer and benefit from the high-quality care and precision of our expert dental team. Your comfort and satisfaction are our top priority, and we are committed to providing exceptional dental solutions tailored to your needs. Don't miss out on this opportunity to enhance your smile with advanced fixed prosthodontic treatments. Book your appointment today!",
        priceBefore:150,
        priceAfter:120,
        img:Photo4,
    }
    ,
    {
        id:2,
        title:"implant",
        desc:"New Dental Implant Services – Get Your Dream Smile at a Discount We are thrilled to open our new dental implant section, offering you advanced, long-lasting solutions for tooth replacement. To celebrate, we are offering an exclusive discount on all dental implant procedures! Whether you need a single implant or a full-mouth restoration, our highly trained professionals will guide you through every step of the process, ensuring a seamless and comfortable experience.Take the first step towards a better smile with this special offer. Contact us now to schedule your consultation",


        priceBefore:800,
        priceAfter:700,
        img:Photo3,
    }
    ,
    {
        id:3,
        title:"Fenner",
        desc:"Exclusive Discount on Veneers! We are thrilled to offer a special discount on our veneers services at our dental clinic! Achieve a flawless smile with our high-quality porcelain veneers, designed to correct imperfections and enhance your natural beauty.Whether you have chipped, stained, or misaligned teeth, veneers can help you achieve the perfect smile you've always dreamed of. Our expert team is here to provide you with personalized care and ensure you achieve stunning, long-lasting results.Take advantage of this limited-time offer and transform your smile with the latest in cosmetic dentistry. Book your consultation today!",
        priceBefore:15,
        priceAfter:13,
        img:Photo5,
    }

]
    const [isChecked,setisChecked]=useState(false)

    const handleSwitchChange = (e) => {
        setisChecked(e.target.checked)
        console.log("Switch is now:", e.target.checked ? "ON" : "OFF");
      };

  return (
    <>
    
    <section className='Discounts'>
     
        <h2 style={{color:colorDiscount}}>My Discounts</h2>
        <Form className='Form'>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Check Discount"
                            style={{color:colorDiscount}}
                            onChange={handleSwitchChange} 
                        />
                    </Form>
      

        <Carousel indicators={false} interval={null} className='w-75'>
        {dataDiscounts.map((treatmentGroup, index) => (
          <Carousel.Item key={index}>
            
            <div className='Discount'>
               <div className='Discount-desc'>
           
                    <h3 style={{color:colorDiscount}}>{treatmentGroup.title}</h3>
                    
                    {treatmentGroup.desc.length>maxCharsForScroll ? <p className='newDiscount' 
                      style={{
                        fontSize: "16px",
                        maxHeight: treatmentGroup.desc.length > maxCharsForScroll ? "100px" : "auto",
                        overflowY: treatmentGroup.desc.length > maxCharsForScroll ? "scroll" : "visible",
                        color:colorDiscount
                       
                      }}

                    
                    >

                      {treatmentGroup.desc}
                    </p>
                  :
                  <p className='newDiscount' 
                  style={{
                    fontSize: "16px",
                    maxHeight: "100px",
                    overflowY: "visible",
                    color:colorDiscount
                    
                   
                  }}
                  >
                      {treatmentGroup.desc}

                  </p>
                  }
                 
                    <h5 style={{color:colorDiscount}}>{isChecked ? "price after discount ":"price before discount"}<span style={isChecked ?{color:"green" ,fontSize:"24px"} :{color:"red",fontSize:"24px"}}>{isChecked ? `${treatmentGroup.priceAfter} $`:<strike> {treatmentGroup.priceBefore} $</strike>}</span></h5>
                    
              </div>
              
              <img src={treatmentGroup.img}/>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>


    </section>
    </>
  )
}
