// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ IMPORTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React, { useState } from "react";
import "./infinityScroller.css";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ IMPORTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// *****************************************************************************************************? OPENAI CONFIG *****************************************************************************

// ********************
// ********************

// ********************
// *****************************************************************************************************? OPENAI CONFIG *****************************************************************************
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DUMMY DATA // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const videos = [
  {
    img: "assets/videos/reel2.mp4",
  },
  { img: "assets/videos/reel2.mp4" },
  { img: "assets/videos/reel3.mp4" },
  { img: "assets/videos/reel4.mp4" },
  { img: "assets/videos/reel5.mp4" },
  { img: "assets/videos/reel3.mp4" },
  { img: "assets/videos/reel4.mp4" },
  { img: "assets/videos/reel1.mp4" },
  { img: "assets/videos/reel2.mp4" },
  { img: "assets/videos/reel5.mp4" },
];
const moreVideos = [
  {
    img: "assets/videos/reel2.mp4",
  },
  { img: "assets/videos/reel2.mp4" },
  { img: "assets/videos/reel3.mp4" },
  { img: "assets/videos/reel4.mp4" },
  { img: "assets/videos/reel5.mp4" },
  { img: "assets/videos/reel3.mp4" },
  { img: "assets/videos/reel4.mp4" },
  { img: "assets/videos/reel1.mp4" },
  { img: "assets/videos/reel2.mp4" },
  { img: "assets/videos/reel5.mp4" },
];
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DUMMY DATA // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function InfinityScroller() {
  // ********************* USEsTATES ********************************************
  const [inputValue, setInputValue] = useState("");
  const [SelectedValue, setSelected] = useState("");
  //***====================
  // let videoHeight = window.visualViewport.height;
  // let videoWidth = window.Viewport.width;

  //********************************
  //******************************************** */
  //***********************************  LOGIQUE ***************************
  //   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& JSX //   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

  // ?????????????????????????????????????????????????????????????????? JSX
  // ???????????????????????????????????????
  // let parameter = new Date().getMilliseconds(); //  generate variable based on current date/time
  const handleClick = (value) => {
    setInputValue(value);
    console.log(inputValue);
  };
  return (
    <div className="infinity-scroll">
      <h5>top videos</h5>
      <div className="wrapper">
        <div className="images-container ">
          {videos.map((item, idx) => {
            return (
              <div className="image" key={idx}>
                <video width="350" height="550" muted controls={true}>
                  <source src={item.img} type="video/mp4" />
                </video>
              </div>
            );
          })}
        </div>
        {/* //???????????????????????????????????????  */}
        <h4>more videos</h4>
        <div className="moreVideos">
          <div className="videosPlayer">
            <h6>video titele</h6>
            <video src={inputValue} width={650} height={650} controls={true}>
              {/* <source  /> */}
            </video>
          </div>
          <div className="images-container">
            {moreVideos.map((item, idx) => {
              return (
                <div
                  onClick={() => handleClick(item.img)}
                  // className="video"
                  key={idx}
                  className="image">
                  <video width="200" height="250">
                    <source src={item.img} type="video/mp4" />
                  </video>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfinityScroller;
