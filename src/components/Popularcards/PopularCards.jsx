import "./pop.css";

export default function PopularCards({ title, direc, des, photo1 }) {
 

  return (
    <div className={direc ? "SingleCard" : "SingleCardReverse"}>
      <div className="side">
        <div className="side-1">
          {title && <h3>{title}</h3>} {/* تأكد من وجود النص قبل عرضه */}
          {des && <p>{des}</p>} {/* تأكد من وجود النص قبل عرضه */}
        </div>

        <div className="side-2">
          {photo1 && <img src={photo1} alt="photo1" />} {/* تأكد من وجود الصورة */}
         
        </div>
      </div>
    </div>
  );
}


/*

<div className={direc ? "SingleCard" : "SingleCardReverse"}>
      
        <div className='side-1'>
            <h3>
                {title}
            </h3>

            <p>
                {des}
            </p>
        </div>

        <div className='side-2'>
          <img src={photo1} />
          <img src={photo2}/>
        </div>
    </div>
    
    */
