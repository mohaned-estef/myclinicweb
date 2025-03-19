import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css"; // تأكد من أن ملف الـ CSS يحتوي على الأنماط المطلوبة
import yourImage from './../../assets/arrow2.png';
import doctorIcon from "./../../assets/doctor.png";

export default function Hero() {
  // إذا تم تمرير move من الـ props يتم تعيينه، وإلا ستكون القيمة الافتراضية هي true

  const navigate = useNavigate();

  const movetoAboutPage = () => {
    navigate("/about");
  };

  const mycolor = localStorage.getItem('color');
  let colorHero = mycolor === "#FFFFFF" ? "#000000" : "#FFFFFF";

  return (
    <section id="Hero" className="Hero">
      {/* استخدم الكلاس الديناميكي بناءً على قيمة move */}
      <div className= "Hero-content">
        <img src={doctorIcon} className="Hero-img" />
        <h1 style={{ color: colorHero }}>
          Welcome to my dental clinic
        </h1>

       
          <img
            src={yourImage}
            style={{ marginLeft: "10px", backgroundColor: "inherit", width: "60px", height: "60px" }}
            onClick={movetoAboutPage}
          />
       
      </div>
    </section>
  );
}
