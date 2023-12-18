import React from "react";
import "./gallery.css";
import MainTitle from "../main-title/MainTitle";

const Gallery = ({ gallery }) => {
  return (
    <>
      <MainTitle title="Gallery" />
      <div className="gallery" id="gallery">
        <div className="container">
          {gallery.map((item, idx) => (
            <div id={item.id} className="box" key={idx}>
              <div className="image-holder">
                <span className="numbers">{`${item.id}/${gallery.length}`}</span>
                <img src={`assets/images/${item.img}`} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
