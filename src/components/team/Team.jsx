import React from "react";
import "./team.css";
import { teams } from "../../data";
const Team = () => {
  return (
    <div className="team" id="team">
      <div className="container">
        {teams.map((team, idx) => (
          <div className="box" key={idx}>
            <div className="data">
              <img src={team.img} alt="" />
              <div className="socials">
                {team.socials.map((item, idx) => (
                  <a href="#" key={idx}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="info">
              <h3>{team.info.name}</h3>
              <p>{team.info.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
