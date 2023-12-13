import React from "react";

const Restart = () => {
  return (
    <div className="restart">
      <h1 className="restart-title">restart game ? </h1>
      <div className="restart-btns">
        <button className="btn btn-sm">no,cancel</button>
        <button className="btn btn-sm btn-yellow ">yes,restart</button>
      </div>
    </div>
  );
};

export default Restart;
