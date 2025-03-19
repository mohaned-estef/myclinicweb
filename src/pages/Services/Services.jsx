import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Hero from '../../components/Hero/Hero';
import NavBar from "../../components/NavBar/NavBar";
import "./Services.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom'; // تأكد من استخدام هذا الاستيراد


import beforeImg1 from "./../../assets/before-img1.jpg";
import afterImg1 from "./../../assets/after-img1.jpg";
import beforeImg2 from "./../../assets/before-img2.png";
import afterImg2 from "./../../assets/after-img2.png";
import beforeImg3 from "./../../assets/before-img3.jpg";
import afterImg3 from "./../../assets/after-img3.jpg";


import Photo3 from "./../../assets/endo.png";
import Photo4 from "./../../assets/fixed.png";
import Photo5 from "./../../assets/conservative.png";
import Photo6 from "./../../assets/removable.png";
import Photo7 from "./../../assets/extract.png";
import Photo8 from "./../../assets/implant.png";
import Photo9 from "./../../assets/ortho.png"
import Photo10 from "./../../assets/maxillofacialSurgery.png"

import  ParticlesBackground from "./../Experience/Experience"

import HeroServices from '../../components/HeroServices/HeroServices';

import Footer from "./../../components/Footer/Footer";


export default function Services() {

  const paragraph1 = "Endodontic treatment is an important treatment for dental caries in children. The treatment involves removing the characteristic tissues of the decay, then cleaning and valving the teeth. After that, the teeth are filled with special materials to preserve their functions because they are from infection or infection, which helps maintain oral health";
  const paragraph2 = "Fixed prostheses are devices used to replace missing or damaged teeth, such as crowns and bridges. These prostheses are permanently attached to the original teeth or implants, helping to restore normal oral functions, such as chewing and speaking. These solutions are effective in improving appearance and aesthetics and ensuring long-term patient comfort";
  const paragraph3 = "Conservative treatment aims to preserve teeth and prevent tooth decay.";
  const paragraph4 = "Removable dental prostheses are medical solutions used to replace missing or damaged teeth, including partial and complete dentures. They are easy to remove and clean, providing comfort to the patient and restoring normal oral functions";
  const paragraph5 = "Tooth extraction is a surgical procedure in which a tooth is removed from its place in the jaw. It is used in cases of severe decay, gum inflammation, or to widen the space for orthodontic teeth, and it can also be due to an abscess or chronic gum disease";
  const maxChars = 100;

  const [timebyms, settimebyms] = useState(8000);



  const implantDepartment = "We are pleased to announce the opening of our new dental implant department, which will provide you with the best solutions to replace missing teeth and restore your beautiful smile with confidence. 🔹 What We Offer: Advanced dental implants using the latest technologies and high-quality materials. A specialized medical team of experienced dentists. Free consultation services to help you choose the best solution for you. 🔹 Advantages of Dental Implants: High safety and effectiveness thanks to modern technologies. Comfort and precision in treatment procedures. Natural results for a brighter smile. Don't miss the opportunity to improve your oral health and the beauty of your smile. Book your consultation now with our expert dental implant doctors! 📞 For more information or to book an appointment, contact us at: [Phone Number] 📍 Address: [Clinic Address] [Clinic Name] - Where a new smile begins!";
  
  const orthodontics = "Welcome to our new orthodontics department, where your smile is our priority! Achieve the perfect smile with our expert orthodontic care. Now offering comprehensive orthodontic services to straighten your teeth and boost your confidence! Transform your smile with personalized orthodontic treatments at our clinic.”Our orthodontics department is here to help you smile with confidence—book your consultation today!";
  
  const maxillofacialSurgery = "Introducing our new Oral and Maxillofacial Surgery department for advanced facial and jaw care. Expert care for facial and jaw conditions now available at our clinicEnhance your facial health with specialized oral and maxillofacial surgery services. Transforming smiles and restoring function with our advanced maxillofacial surgical treatments.Precision surgery for your facial and jaw health—now at our clinic!";

  const dataTechniques = [
    { id: 1, title: "Opening of the Dental Implant Department", img: Photo8, desc: implantDepartment ,direc:true},
    { id: 2, title: "orthodontics", img: Photo9, desc: orthodontics ,direc:false},
    { id: 3, title: "maxillo facial Surgery", img: Photo10, desc: maxillofacialSurgery ,direc:true},
  ];

  
  const [dataTreatments, setdataTreatments] = useState([
    [
      { id: 1, img: beforeImg1, state: "before" },
      { id: 2, img: afterImg1, state: "after" },
    ],
    [
      { id: 3, img: beforeImg2, state: "before" },
      { id: 4, img: afterImg2, state: "after" },
    ],
    [
      { id: 5, img: beforeImg3, state: "before" },
      { id: 6, img: afterImg3,  state: "after" },
    ],
  ]);

  const data = [
    { id: 1, img: Photo3, title: "endodontic treatment", desc: paragraph1 },
    { id: 2, img: Photo4, title: "fixed dental prostheses", desc: paragraph2 },
    { id: 3, img: Photo5, title: "Conservative dental treatment", desc: paragraph3 },
    { id: 4, img: Photo6, title: "Removable dental prostheses", desc: paragraph4 },
    { id: 5, img: Photo7, title: "tooth extraction", desc: paragraph5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    settimebyms((prev) => prev + 8000); // تعديل لزيادة الوقت عند الرجوع للخلف
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, timebyms);

    return () => clearInterval(interval); // تنظيف الـ interval عند التخلص من المكون
  }, [timebyms]);

  const currentSlide = data[currentIndex];
  const nextSlideItem = data[(currentIndex + 1) % data.length];

  const [expandedState, setExpandedState] = useState({ 1: false, 2: false, 3: false });

  const toggleExpand = (id) => {
    setExpandedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const mycolor=localStorage.getItem('color')
  let colorServices;
  {mycolor == "#FFFFFF" ? colorServices="#000000" : colorServices="#FFFFFF"}
  

  return (
    <>

      <HeroServices />
      
      
      <section id="Recent" className="Recent m-5" style={{color:colorServices}}>
        <div className="Recent-Content">
          <h2>Main services</h2>
          <div className="Recent-cards">
            <button onClick={prevSlide} className="btn btn-secondary prev-button">
              PREV
            </button>
            <div className="CardWrapper">
              <div className="Card">
                <img src={currentSlide.img} alt={currentSlide.title} />
                <h4 style={{color:colorServices}}>{currentSlide.title}</h4>
                <p style={{color:colorServices}}>
                  {currentSlide.desc.length > maxChars
                    ? expandedState[currentSlide.id]
                      ? currentSlide.desc
                      : currentSlide.desc.slice(0, maxChars) + "..."
                    : currentSlide.desc}
                </p>
                {currentSlide.desc.length > maxChars && (
                  <>
                    <button
                      className="show-more"
                      onClick={() => toggleExpand(currentSlide.id)}
                      style={{
                        display: expandedState[currentSlide.id] ? "none" : "inline-block",
                        borderRadius:"8px"
                      }}
                    >
                      <span>Show More</span>
                    </button>
                    <button
                      className="show-less"
                      onClick={() => toggleExpand(currentSlide.id)}
                      style={{
                        display: !expandedState[currentSlide.id] ? "none" : "inline-block",
                         borderRadius:"8px"
                      }}
                    >
                      <span>Show Less</span>
                    </button>
                  </>
                )}
              </div>

              <div className="Card">
                <img src={nextSlideItem.img} alt={nextSlideItem.title} />
                <h4 style={{color:colorServices}}>{nextSlideItem.title}</h4>
                <p style={{ borderRadius:"8px",color:colorServices}}>
                  {nextSlideItem.desc.length > maxChars
                    ? expandedState[nextSlideItem.id]
                      ? nextSlideItem.desc
                      : nextSlideItem.desc.slice(0, maxChars) + "..."
                    : nextSlideItem.desc}
                </p>
                {nextSlideItem.desc.length > maxChars && (
                  <>
                    <button
                      className="show-more"
                      onClick={() => toggleExpand(nextSlideItem.id)}
                      style={{
                        display: expandedState[nextSlideItem.id] ? "none" : "inline-block",
                         borderRadius:"8px",
                      
                      }}
                    >
                      <span>Show More</span>
                    </button>
                    <button
                      className="show-less"
                      onClick={() => toggleExpand(nextSlideItem.id)}
                      style={{
                        display: !expandedState[nextSlideItem.id] ? "none" : "inline-block",
                         borderRadius:"8px",
                      
                      }}
                    >
                      <span>Show Less</span>
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="NavigationButtons">
              <button onClick={nextSlide} className="btn btn-primary next-button">
                NEXT
              </button>
            </div>
          </div>
        </div>
      </section>
        <Carousel indicators={false} interval={2000}>
            {dataTreatments.map((treatmentGroup, index) => (
              <Carousel.Item key={index}>
                <div className='Some-treatments'style={{color:colorServices}}>
                  <h2>Some Treatments</h2>
                  <div className="Case">
                    {treatmentGroup.map((item) => (
                      <div className={`Case-${item.state}`} key={item.id}>
                        <h4>{item.state === "before" ? "Before" : "After"}</h4>
                        <img src={item.img} alt={`Treatment ${item.state}`} className='img'/>
                      </div>
                    ))}
                  </div>
                </div>
              </Carousel.Item>
            ))}
      </Carousel>


      <section className='latestNews m-5' style={{color:colorServices}}>
        <h2>Latest News</h2>
          {dataTechniques.map((departmentGroup, index3) => (
          
                
                <div className={departmentGroup.direc == true ? "department" :"department-reverse"} key={index3}>
                    <div className='department-title' style={{color:colorServices}}>
                      <h2 className=''>{departmentGroup.title}</h2>
                      <img src={departmentGroup.img}/>
                    </div>
                    <p style={{color:colorServices}}>{departmentGroup.desc}</p>                    
                </div>
        
      
          ))}
      
      </section>

    </>
    
  );
 
}


/*

  <Carousel indicators={false} interval={null}>

      {dataTreatments.map((key,index) =>{
      return(
        <Carousel.Item key={index}>

            <div className='Some-treatments'>
              
          
                    <h2>Some Treatments</h2>
                    <div className='Case'>
                      <div className='Case-before'>
                        <h4>before</h4>
                        <img src={key.img}/>
                        
                      </div>
                      <div className='Case-after'>
                        <h4>after</h4>
                        <img src={key.img}/>
                      </div>
                    </div>
                    <button className='btn-Case'>Case description</button>
            

            </div>
            
          </Carousel.Item>
      )}
      )}
    </Carousel>*/

/*
const paragraph1 =
    "مداواة الأسنان اللبية هي عملية علاجية تهدف إلى معالجة تسوس الأسنان اللبية عند الأطفال. يشمل العلاج إزالة الأنسجة المتضررة من التسوس، ثم تنظيف الأسنان وتعقيمها. بعد ذلك، يتم حشو الأسنان باستخدام مواد خاصة لضمان استعادة وظائفها وحمايتها من الألم أو العدوى، مما يساعد على الحفاظ على صحة الفم.";
  const paragraph2 =
    "التعويضات الثابتة هي أجهزة تستخدم لاستبدال الأسنان المفقودة أو التالفة، مثل التيجان والجسور. تُثبت هذه التعويضات بشكل دائم على الأسنان الأصلية أو الزرعات، مما يساعد في استعادة الوظائف الطبيعية للفم، مثل المضغ والكلام. تعتبر هذه الحلول فعالة لتحسين المظهر والجمالية وضمان الراحة للمريض على المدى الطويل.";
  const paragraph3 = "المداواة المحافظة تهدف إلى الحفاظ على الأسنان ومنع تسوسها";
  const paragraph4 =
    "تعويضات الأسنان المتحركة هي حلول طبية تستخدم لاستبدال الأسنان المفقودة أو التالفة، وتشمل أطقم الأسنان الجزئية والكاملة. تتميز بإمكانية إزالتها وتنظيفها بسهولة، مما يوفر راحة للمريض واستعادة الوظائف الطبيعية للفم.";
  const paragraph5 =
    "قلع الأسنان هو إجراء جراحي يتم فيه إزالة السن من مكانه في الفك. يُستعمل عند وجود تسوس شديد، التهاب في اللثة، أو لتوسيع المسافة للأسنان التقويمية، كما يمكن أن يكون بسبب خراج أو أمراض اللثة المزمنة";
  const maxChars = 100;

  const [timebyms, settimebyms] = useState(8000);

  const data = [
    {
      id: 1,
      img: Photo1,
      title: "مداواة الاسنان اللبية",
      desc: paragraph1,
    },
    {
      id: 2,
      img: Photo2,
      title: "تعويضات سنية ثابتة",
      desc: paragraph2,
    },
    {
      id: 3,
      img: Photo3,
      title: "مداواة الاسنان المحافظة",
      desc: paragraph3,
    },
    {
      id: 4,
      img: Photo4,
      title: "تعويضات سنية متحركة",
      desc: paragraph4,
    },
    {
      id: 5,
      img: Photo5,
      title: "قلع الاسنان",
      desc: paragraph5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    settimebyms((prev) => prev + 8000); // تعديل لزيادة الوقت عند الرجوع للخلف
  };

  // استخدام useEffect لتشغيل nextSlide بناءً على timebyms
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, timebyms);

    return () => clearInterval(interval); // تنظيف الـ interval عند التخلص من المكون
  }, [timebyms]); // إضافة timebyms كـ dependency

  const currentSlide = data[currentIndex];
  const nextSlideItem = data[(currentIndex + 1) % data.length];

  const [expandedState, setExpandedState] = useState({
    1: false,
    2: false,
    3: false,
  });

  const toggleExpand = (id) => {
    setExpandedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section id="Recent" className="Recent">
      <div className="Recent-Content">
        <h2>الخدمات الرئيسية </h2>
   

        <div className="Recent-cards">
          <button onClick={prevSlide} className="btn btn-secondary prev-button">
            السابق
          </button>

          <div className="CardWrapper">
        
            <div className="Card">
              <img src={currentSlide.img} alt={currentSlide.title} />
              <h4>{currentSlide.title}</h4>
              <p>
                {currentSlide.desc.length > maxChars
                  ? expandedState[currentSlide.id]
                    ? currentSlide.desc
                    : currentSlide.desc.slice(0, maxChars) + "..."
                  : currentSlide.desc}
              </p>
              {currentSlide.desc.length > maxChars && (
                <>
                  <button
                    className="show-more"
                    onClick={() => toggleExpand(currentSlide.id)}
                    style={{
                      display: expandedState[currentSlide.id] ? "none" : "inline-block",
                    }}
                  >
                    <span>عرض المزيد</span>
                  </button>
                  <button
                    className="show-less"
                    onClick={() => toggleExpand(currentSlide.id)}
                    style={{
                      display: !expandedState[currentSlide.id] ? "none" : "inline-block",
                    }}
                  >
                    <span>عرض أقل</span>
                  </button>
                </>
              )}
            </div>

       
            <div className="Card">
              <img src={nextSlideItem.img} alt={nextSlideItem.title} />
              <h4>{nextSlideItem.title}</h4>
              <p>
                {nextSlideItem.desc.length > maxChars
                  ? expandedState[nextSlideItem.id]
                    ? nextSlideItem.desc
                    : nextSlideItem.desc.slice(0, maxChars) + "..."
                  : nextSlideItem.desc}
              </p>
              {nextSlideItem.desc.length > maxChars && (
                <>
                  <button
                    className="show-more"
                    onClick={() => toggleExpand(nextSlideItem.id)}
                    style={{
                      display: expandedState[nextSlideItem.id] ? "none" : "inline-block",
                    }}
                  >
                    <span>عرض المزيد</span>
                  </button>
                  <button
                    className="show-less"
                    onClick={() => toggleExpand(nextSlideItem.id)}
                    style={{
                      display: !expandedState[nextSlideItem.id] ? "none" : "inline-block",
                    }}
                  >
                    <span>عرض أقل</span>
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="NavigationButtons">
            <button onClick={nextSlide} className="btn btn-primary next-button">
              التالي
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  */


