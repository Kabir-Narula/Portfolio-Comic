import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollDown } from "./ScrollDown";
import { useTranslation } from "react-i18next";
import { Form } from "./Form";
import "../css/about.css";
import bg from "../images/backgrounds/bg-about.jpg";
import moon from "../images/parallax/moon.png";
import cloud1 from "../images/parallax/cloud1.png";
import cloud2 from "../images/parallax/cloud2.png";
import star from "../images/parallax/star.png";
import me from "../images/me/scenwe4.png";
import grass from "../images/parallax/grass.png";

export const About = () => {
  const [t, i18n] = useTranslation("about");

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#moon", {
      scrollTrigger: {
        scrub: true,
      },
      x: 1000,
      y: 300,
      scale: 2,
    });

    gsap.to("#cloud1", {
      scrollTrigger: {
        scrub: true,
      },
      x: -400,
    });

    gsap.to("#cloud2", {
      scrollTrigger: {
        scrub: true,
      },
      x: 300,
    });

    gsap.to("#star", {
      scrollTrigger: {
        scrub: true,
      },
      x: -3500,
      y: 3000,
      scale: 0,
    });

    gsap.to("#me", {
      scrollTrigger: {
        scrub: true,
      },
      x: 0,
      y: -1300,
      scale: 1,
    });

    gsap.to("#grass", {
      scrollTrigger: {
        scrub: true,
      },
      y: 0,
      scale: 1.2,
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
        <img src={me} id="me" alt="me" />
        <img src={grass} id="grass" alt="grass" />
      </section>

      <ScrollDown />

      <section>
        <div>
          <h2>{t("title.about-me")}</h2>
          <p className="about-text">{t("body.p")}</p>
        </div>

        <div className="lang-icons">
          <img
            className="en-btn"
            onClick={() => i18n.changeLanguage("en")}
            alt="united-kingdom"
          />
          <img
            className="es-btn"
            onClick={() => i18n.changeLanguage("es")}
            alt="spain"
          />
        </div>
      </section>

      <Form />
    </div>
  );
};
