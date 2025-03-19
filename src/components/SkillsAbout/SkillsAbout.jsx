import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SkillsAbout.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Doughnut } from 'react-chartjs-2';


function Skills() {
  const [startProgress, setStartProgress] = useState(false); // بدء تقدم الـ ProgressBar عند الوصول إلى القسم
  const [isVisible, setIsVisible] = useState(false); // حالة لرؤية القسم
  const skillsSectionRef = useRef(null);

  const dataSkills = [
    { id: 1, title: 'Fixed dental prostheses', value: 54, color: "red" },
    { id: 2, title: 'Tooth extraction', value: 90, color: "green" },
    { id: 3, title: 'Conservative dental', value: 24, color: "blue" },
    { id: 4, title: 'Endodontic treatment', value: 97, color: "yellow" },
    { id: 5, title: 'Dental implants', value: 4, color: "orange" },
  ];

  // دالة للسكرول
  const handleScroll = () => {
    if (skillsSectionRef.current) {
      const rect = skillsSectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setStartProgress(true); // بداية تقدم الـ ProgressBar عند الوصول للقسم
        setIsVisible(true); // جعل القسم مرئيًا عندما يصل السكرول
      }
    }
  };
  const dataCharSkills = {
    labels: dataSkills.map(item => item.title),
    datasets: [
      {
        data: dataSkills.map(item => item.value),  
        backgroundColor: dataSkills.map(item => item.color),
        hoverBackgroundColor: dataSkills.map(item => item.color),
      },
    ],
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // تنظيف الحدث عند إزالة المكون
  }, []);

  return (
    <>

    <section
      className={"myskills"}
      ref={skillsSectionRef}
    >
      <h2>My Skills</h2>
      {dataSkills.map((skill) => (

        <div className={"skill"}  key={skill.id}>
          <h4>{skill.title}</h4>
          <ProgressBar variant={skill.color} now={skill.value}/>
        </div>


    
      ))}
   <div className='dataCharsSkills'>
      <Doughnut data={dataCharSkills}  />
    </div>
    </section>
    
    </>
  );
}

export default Skills;
