import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import About from "../pages/About";

const Home = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the world one Country at a Time!
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of countries around the
            globe. From the bustling streets of Tokyo to the serene landscapes
            of New Zealand, embark on a journey that will broaden your horizons
            and deepen your understanding of our diverse world.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/resized_image_medium.png"></img>
        </div>
      </div>
      <About />
    </main>
  );
};

export default Home;
