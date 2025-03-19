import { RGBA } from "konva/lib/filters/RGBA";
import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground({color}) {
  const [particlesLoaded, setParticlesLoaded] = useState(false); // حالة لمعرفة إذا كانت الجسيمات قد تم تحميلها
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [initialized, setInitialized] = useState(false); // حالة للتأكد من تهيئة الجسيمات مرة واحدة فقط
  const [loading, setLoading] = useState(true); // حالة لعرض شاشة التحميل حتى تحميل الجسيمات

  // تهيئة الجسيمات مرة واحدة فقط
  const particlesInit = async (main) => {
    if (!initialized) {
      await loadFull(main);
      setInitialized(true); // تعيين الحالة عند أول تحميل
    }
  };

  // التأكد من أن الجسيمات قد تم تحميلها قبل العرض
  const particlesLoadedCallback = (container) => {
    if (!particlesLoaded) {

      setParticlesLoaded(true); // تعيين الحالة عند أول تحميل
      setLoading(false); // إخفاء شاشة التحميل
    }
  };

  // تحديث عرض الشاشة عند تغيير الحجم
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const particleOptions = {
    background: {
      color: {
        value: color, // خلفية سوداء
      },
    },
    particles: {
      number: {
        value: screenWidth < 768 ? 50 : 100, // ضبط عدد الجسيمات حسب حجم الشاشة
      },
      shape: {
        type: "circle", // شكل النجوم
      },
      color: {
        value: "#456789", // لون النجوم أصفر
      },
      size: {
        value: 1, // حجم الجسيمات
      },
      links: {
        enable: true,
        distance: 60,
        color: "#333333",
        width: 1,
      },
      move: {
        enable: true,
        speed: screenWidth < 768 ? 1 : 2, // سرعة الحركة حسب حجم الشاشة
        direction:"none",
        random: true,
        straight: false,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
      },
    },
  };

  return (
   
    <div
      style={{
        position: "fixed", // تحديد الموقع كـ "fixed" بحيث يبقى في الخلفية
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // تعيين z-index للسماح بمحتوى الصفحة أن يكون فوق الجسيمات
        pointerEvents: "none", // تعطيل التفاعل مع الجسيمات
      }}
    >
      {/* عرض شاشة التحميل فقط إذا كانت الجسيمات لم تُحمل بعد */}
      {loading && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(23,123,123,1)",
            zIndex: -1, // خلفية مظلمة أثناء تحميل الجسيمات
          }}
        />
      )}
      {/* هنا يتم عرض الجسيمات فقط بعد تحميلها */}
      <Particles
        id="tsparticles"
        init={particlesInit} // تهيئة الجسيمات
        loaded={particlesLoadedCallback} // تعيين حالة عند تحميل الجسيمات
        options={particleOptions} // الخيارات المخصصة للجسيمات
      />
    </div>
  );
}

/*


  useEffect(() => {
    
    let incrementer;
    const targetPatients = currentSlide.numberPatients;

    if (numberPatients < targetPatients) {
      incrementer = setInterval(() => {
        setnumberPatients((prev) => {
          if (prev < targetPatients) {
            return prev + 1;
          }
          
          return () => clearInterval(incrementer);
        });
      }, 6);
    }

    return () => clearInterval(incrementer);
  }, [currentSlide.numberPatients, currentIndex, numberPatients]);



  useEffect(() => {
    setnumberPatients(0);
  }, [currentIndex]);



  useEffect(() => {
    
    const targetPatients = currentSlide.numberPatients;

    if (numberPatients < targetPatients) {
      setInterval(() => {
    
          if (incrementer.prev < targetPatients) {
            incrementer.current=incrementer.current+1;
            clearInterval(incrementer); 
            return incrementer;
          }
          return () => clearInterval(incrementer);
        },50)};
      }, [currentSlide.numberPatients, currentIndex, numberPatients]);
   





*/