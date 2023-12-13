import React from "react";
import "./testimonials.css";

const Testimonials = ({ testimonials, scrollableMenu }) => {
  //   ********************************
  //******************************************** */
  // ***********************************  LOGIQUE ***************************
  // ************************************************* */
  // *********************************

  //   ********************************
  //******************************************** */
  // ***********************************  JSX ***************************
  // ************************************************* */
  // *********************************
  return (
    <div className="testimonials" id="testimonials">
      <div className="main-scroller">
        <div className="containerTwo">
          {/* GET LINKS LOOP ---------------------------------- */}
          {scrollableMenu.map((link, idx) => (
            <div className="boxTwo" key={idx}>
              <a href={`#${link.link}`}>{link.link}</a>
              <span>{link.icon}</span>
            </div>
          ))}
          {/* GET LINKS LOOP-----------------------------------------------*/}
        </div>
        <div className="container">
          {/* --------------------------------------------------------------- */}
          {testimonials.map((item, idx) => (
            <div className="box" key={idx}>
              <img src={item.avatar} alt="" />
              <h3>{item.name}</h3>
              <span className="title">{item.title}</span>
              <div className="rate">
                <span>{item.rate.filled}</span>
                <span>{item.rate.filled}</span>
                <span>{item.rate.filled}</span>
                <span>{item.rate.filled}</span>
                <span>{item.rate.outline}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
          {/* ---------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
