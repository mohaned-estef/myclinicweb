import React, { useState, useRef } from "react";
import Hero from "../../components/Hero/Hero";
import { Button } from "react-bootstrap"; // استيراد زر من React Bootstrap
import "./settings.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // تأكد من استيراد CSS الخاص بـ Bootstrap

export default function Settings() {
  const [mainText, setMainText] = useState("");
  const [movableText, setMovableText] = useState("");
  const [mainTextAbout, setMainTextAbout] = useState("");
  const [secondary1Text, setsecondary1Text] = useState("");
  const [Subtext1, setSubtext1] = useState("");
  const [secondary2Text, setsecondary2Text] = useState("");
  const [Subtext2, setSubtext2] = useState("");

  // حالة لتخزين الصورة المختارة
  const [image, setImage] = useState(null);

  // تعريف المرجع (Ref) لزر اختيار الصورة
  const fileInputRef = useRef(null);

  // دالة حفظ الإعدادات
  function saveSettings(event) {
    localStorage.setItem("main-text", mainText);
    localStorage.setItem("movable-text", movableText);
    localStorage.setItem("mainTextAbout", mainTextAbout);
    localStorage.setItem("secondary1-Text", secondary1Text);
    localStorage.setItem("Subtext1", Subtext1);
    localStorage.setItem("secondary2-Text", secondary2Text);
    localStorage.setItem("Subtext2", Subtext2);
    event.preventDefault();
    
  }

  // دالة لاختيار الصورة من جهاز المستخدم
  function handleImageChange(event) {
    const file = event.target.files[0]; // الحصول على أول ملف تم اختياره
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // تعيين رابط الصورة المختارة في الحالة
      };
      reader.readAsDataURL(file); // قراءة الصورة وتحويلها إلى Base64
    }
  }

  // دالة لفتح نافذة اختيار الملف عند النقر على الزر
  const openFileInput = () => {
    fileInputRef.current.click(); // محاكاة النقر على الـ input
  };

  return (
    <>

      <Hero Title={"About"} x={false} img={"Hero3"} />

      <section className="container-fluid show-settings">
        <div className="show-settings-hero">
          <h2>اعدادات العرض ل قسم الهيرو</h2>

          <form className="show-settings-form">
            <label htmlFor="main-text">ضع العنوان الرئيسي الذي ترغب بظهوره في الهيرو</label>
            <input
              id="main-text"
              type="text"
              value={mainText}
              onChange={(e) => setMainText(e.target.value)}
            />
            <label htmlFor="movable-text">ضع النص المتحرك الذي يظهر عند الضغط على زر ابدأ الان</label>
            <input
              id="movable-text"
              type="text"
              value={movableText}
              onChange={(e) => setMovableText(e.target.value)}
            />
          </form>
        </div>

        <div className="show-settings-popular">
          <h2>اعدادات العرض لقسم حول</h2>
          <form className="show-settings-form">
            <label htmlFor="main-text-about">ضع العنوان الرئيسي الذي ترغب بظهوره في قسم حول</label>
            <input
              id="main-text-about"
              type="text"
              value={mainTextAbout}
              onChange={(e) => setMainTextAbout(e.target.value)}
            />

            <label htmlFor="secondary1-text">ضع العنوان الفرعي الذي ترغب بظهوره في القسم الاول من حول</label>
            <input
              id="secondary1-text"
              type="text"
              value={secondary1Text}
              onChange={(e) => setsecondary1Text(e.target.value)}
            />

            <label htmlFor="Subtext1">ضع النص الفرعي الذي ترغب بظهوره في القسم الاول من حول</label>
            <input
              id="Subtext1"
              type="text"
              value={Subtext1}
              onChange={(e) => setSubtext1(e.target.value)}
            />

            <label htmlFor="secondary2-text">ضع العنوان الفرعي الذي ترغب بظهوره في القسم الثاني من حول</label>
            <input
              id="secondary2-text"
              type="text"
              value={secondary2Text}
              onChange={(e) => setsecondary2Text(e.target.value)}
            />

            <label htmlFor="Subtext2">ضع النص الفرعي الذي ترغب بظهوره في القسم الثاني من حول</label>
            <input
              id="Subtext2"
              type="text"
              value={Subtext2}
              onChange={(e) => setSubtext2(e.target.value)}
            />

            <Button
              id="btn-saveSettings"
              variant="primary"
              type="submit"
              onClick={saveSettings}
            >
              Save
            </Button>

            {/* زر محاكاة النقر على input type="file" باستخدام React Bootstrap */}
            <Button 
              variant="secondary" 
              onClick={openFileInput}
            >
              جلب صورة
            </Button>

            {/* لا يظهر هذا الـ input بل يتم فتحه عند النقر على الزر */}
            <input
              ref={fileInputRef}
              id="btn-bringPic"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }} // إخفاء الـ input
            />

            {image && (
              <div>
                <h3>الصورة المختارة:</h3>
                <img
                  src={image}
                  alt="User chosen"
                  style={{ width: "200px", height: "auto" }}
                />
              </div>
            )}
          </form>
        </div>
        <div className="show-settings-recent"></div>
      </section>
    </>
  );
}
