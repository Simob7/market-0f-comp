import React from "react";
import "./articles.css";
import MainTitle from "../main-title/MainTitle";
import Cards from "../card/Cards";
const Articles = ({ articles }) => {
  return (
    <div className="articles" id="articles">
      <MainTitle title={"articles"} />
      <div className="container">
        {articles.map((item, idx) => (
          <Cards
            key={idx}
            image={item.img}
            title={item.content.title}
            desc={item.content.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
