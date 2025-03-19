import React  from "react";

import "./HeroServices.css"; // تأكد من أن ملف الـ CSS يحتوي على الأنماط المطلوبة

import doctorIcon from "./../../assets/doctor.png";

export default function Hero() {
  // إذا تم تمرير move من الـ props يتم تعيينه، وإلا ستكون القيمة الافتراضية هي true


  const mycolor = localStorage.getItem('color');
  let colorHero = mycolor === "#FFFFFF" ? "#000000" : "#FFFFFF";

  return (
    <section id="Hero" className="Hero">
      {/* استخدم الكلاس الديناميكي بناءً على قيمة move */}
      <div className= "Hero-content2">
        <img src={doctorIcon} className="Hero-img" />
        <h1 style={{ color: colorHero }}>
          Main Services
        </h1>

      </div>
    </section>
  );
}
