
import "./../Popular/Popular.css"
import Photo1 from "./../../assets/story.jpg"

import Photo3 from "./../../assets/react.jpg"


import PopularCards from "./../../components/Popularcards/PopularCards"



export default function Popular() {
  return (
    <section id="popularSection" className="Popular">
        <h2>حول مهند</h2>
        <p>مزيد من المعلومات عن مهند اصطيف </p>
        
          <PopularCards title={"الولادة والسيرة الذاتية"} direc={true} des={"مهند اصطيف ولد في مدينة طرطوس عام 1999 وينحدر اصله من قرية أطمة في ريف حلب على الحدود السورية التركية "} photo1={Photo3} />
          <PopularCards title={"حول مهند"} direc={false} des={"درس في جامعة الشهباء الخاصة في حلب كلية طب الاسنان وتخرج منها عام 2024"} photo1={Photo1}/>
        
    </section>
 
  )
}








