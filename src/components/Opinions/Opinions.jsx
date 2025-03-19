import React, { useState, useRef } from 'react';
import "./Opinions.css";
import { Particles } from 'react-tsparticles';
import Photo1 from "./../../assets/girl1.png";
import Photo2 from "./../../assets/girl2.png";
import Photo3 from "./../../assets/man1.png";
import Photo4 from "./../../assets/man2.png";
import Photo5 from "./../../assets/man3.png";
import Photo6 from "./../../assets/man4.png";
import Photo7 from "./../../assets/oldwoman.png";
import Photo8 from "./../../assets/girl.png";

import voice1 from "./../../assets/thankvoice.mp3";
import voice2 from "./../../assets/rebuke.mp3";

import ParticlesBackground from "./../../pages/Experience/Experience"

import Mute from "./../../assets/mute.png";
import Resume from "./../../assets/resume.png";

import { FaStar } from 'react-icons/fa6';

export default function Opinions() {
  const [isPlaying, setIsPlaying] = useState(null); // حالة لتتبع أي صوت يتم تشغيله

  // دالة لتشغيل الصوت
  const playAudio = (audioRef, name) => {
    if (audioRef.current) {
      audioRef.current.play(); // تشغيل الصوت
      setIsPlaying(name); // تعيين الصوت الذي يتم تشغيله
    }
  };

  // دالة لإيقاف الصوت
  const stopAudio = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.pause(); // إيقاف الصوت
      audioRef.current.currentTime = 0; // إعادة الصوت إلى البداية
      setIsPlaying(null); // تعيين الحالة إلى null
    }
  };

  const maxCharsForScroll = 100;
  const [dataOpinions, setdataOpinions] = useState([
    {
      id: 1,
      img: Photo1,
      name: "sterida",
      desc: "Thank you so much for your excellent care and expertise. I am extremely pleased with the results and appreciate all the effort you put into my treatment.",
      rating: 5
    },
    {
      id: 2,
      img: Photo3,
      name: "boris",
      desc: "I just wanted to express my sincere gratitude for the wonderful results. Your professionalism and care made all the difference. Thank you!",
      rating: 3
    },
    {
      id: 3,
      img: Photo8,
      name: "seba",
      desc: voice2, // الصوت 2
      rating: 1
    },
    {
      id: 4,
      img: Photo4,
      name: "Donald",
      desc: "Thank you for making my dental treatment such a positive experience. I couldn’t be happier with the results, and I appreciate your skill and care.",
      rating: 4
    },
    {
      id: 5,
      img: Photo2,
      name: "Silvinia",
      desc: "Oops !! what is this? You are stupid and you do not know how to treat well. I tried to treat my teeth with you and it did not work.",
      rating: 1
    },
    {
      id: 6,
      img: Photo6,
      name: "Yamil",
      desc: "Thank you for your professionalism and your efforts. Although the treatment didn't produce the desired results, I believe you’ll continue to offer support in finding the right solution.",
      rating: 2
    },
    {
      id: 7,
      img: Photo5,
      name: "Henry",
      desc: "I’m so grateful for the outstanding care I received during my visit. The results are amazing, and I’m truly thankful for everything you’ve done!",
      rating: 4
    },
    {
      id: 8,
      img: Photo7,
      name: "mary",
      desc: voice1,  // الصوت 1
      rating: 4
    }

   
  ]);

  const mycolor=localStorage.getItem('color')
  let colorOpinions;
  {mycolor == "#FFFFFF" ? colorOpinions="#000000" : colorOpinions="#FFFFFF"}
  
  return (
    <>

    <section className='Opinions'>
  
      <h2 className='mb-5' style={{color:colorOpinions}}>Patient's Opinions</h2>

      <div className='Opinion' style={{color:colorOpinions}}>
        {dataOpinions.map((key, index) => {
          const audioRef = useRef(null); // مرجع للصوت الخاص بكل شخص
          return (
            <>
            
            <div key={index} className='dataopinion'>
              <img src={key.img} style={{ width: "100px", height: "100px", borderRadius: "8px" }} />
              <h4>{key.name}</h4>
              <h5
                className='text-container2'
                style={{
                  fontSize: "16px",
                  maxHeight: key.desc.length > maxCharsForScroll ? "100px" : "auto",  // إذا كان النص أكبر من الحد، يتم تحديد maxHeight
                  overflowY: key.desc.length > maxCharsForScroll ? "scroll" : "hidden", // إذا كان النص أكبر، يظهر السكرول بار
                  scrollbarWidth: "none",  // يعمل على بعض المتصفحات مثل Firefox
                  msOverflowStyle: "none"
                }}
              >
                {key.desc.includes(".mp3") ? "": key.desc }
              </h5>

             
              {key.desc.includes(".mp3") && (
                <div>
                  {<audio ref={audioRef} src={key.desc} />}
                
                  {isPlaying === key.name ? (
                    <img onClick={() => stopAudio(audioRef)} style={{ width: "50px", height: "50px", background: "inherit",color:colorOpinions }} src={Mute} alt="Mute" />
                  ) : (
                    <img onClick={() => playAudio(audioRef, key.name)} style={{ width: "50px", height: "50px", background: "inherit",color:colorOpinions }} src={Resume} alt="Resume" />
                  )}
                </div>
              )}
              <h6>Rating</h6>
              <div className='rating'>
                {/* عرض النجوم بناءً على التقييم */}
                {[...Array(key.rating)].map((_, starIndex) => (
                  <FaStar key={starIndex} />
                ))}
              </div>
            </div>
            </>
          );
          
        })}
       
      </div>
    </section>
    </>
  );
}
