import React from "react";
import Header from "./header/Header";
import Landing from "./landing/Landing";
import Articles from "./articles/Articles";
import Gallery from "./gallery/Gallery";
// ||||||||||||||||||||||||||||||||
import {
  articles,
  gallery,
  features,
  scrollableMenu,
  testimonials,
} from "../data";
import Features from "./features/Features";
import Testimonials from "./testimonilas/Testimonials";
import InfinityScroller from "./infinity scroller/InfinityScroller";

import Team from "./team/Team";
import Services from "./services/Services";
import Xo from "./tic-tac/Xo";
// **********************************************************************************************
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Landing />
      <Articles articles={articles} />
      <Gallery gallery={gallery} />
      <Features features={features} />
      <Testimonials
        scrollableMenu={scrollableMenu}
        testimonials={testimonials}
      />
      <InfinityScroller />
      <Team />
      <Services />
      <Xo />
    </div>
  );
};

export default Home;
