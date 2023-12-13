import React from "react";
import "./services.css";
import { services } from "../../data";
const Services = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        {services.map((item, idx) => (
          <div className="box" key={idx}>
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <div className="info">
              <a href="#">{item.details}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
