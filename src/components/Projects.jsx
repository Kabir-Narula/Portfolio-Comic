import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollDown } from "./ScrollDown";
import { ProjectsDetails } from "./ProjectsDetails";
import "../css/projects.css";
import bg from "../images/backgrounds/bg-scene7.jpg";
import moon from "../images/parallax/moon.png";
import cloud1 from "../images/parallax/cloud1.png";
import cloud2 from "../images/parallax/cloud2.png";
import star from "../images/parallax/star.png";
import guy from "../images/badGuy/Ryunosuke_Akutagawa_29.webp";
import grass from "../images/parallax/grass.png";

export const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#moon", {
      scrollTrigger: {
        scrub: true,
      },
      x: 4000,
      y: 500,
      scale: 4,
    });

    gsap.to("#cloud1", {
      scrollTrigger: {
        scrub: true,
      },
      x: -1000,
    });

    gsap.to("#cloud2", {
      scrollTrigger: {
        scrub: true,
      },
      x: 1000,
    });

    gsap.to("#star", {
      scrollTrigger: {
        scrub: true,
      },
      x: -5000,
      y: 4000,
      scale: 0,
    });

    gsap.to("#guy", {
      scrollTrigger: {
        scrub: true,
      },
      x: 0,
      y: -4500,
      scale: 4,
    });

    gsap.to("#grass", {
      scrollTrigger: {
        scrub: true,
      },
      y: 0,
      scale: 1.5,
    });
  }, []);

  return (
    <div className="wrapper">
      <section className="about-header">
        <img src={bg} id="bg" alt="bg" />
        <img src={moon} id="moon" alt="moon" />
        <img src={cloud1} id="cloud1" alt="cloud" />
        <img src={cloud2} id="cloud2" alt="cloud" />
        <img src={star} id="star" alt="star" />
        <img src={guy} id="guy" alt="guy" />
        <img src={grass} id="grass" alt="grass" />
      </section>

      <ScrollDown />

      <section>
        <div className="d-grid">
          <h2 className="project-title">MY PROJECTS</h2>
        </div>
      </section>

      <ProjectsDetails />
    </div>
  );
};
