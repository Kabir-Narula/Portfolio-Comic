import React, { useEffect } from "react";
import gsap, { TimelineMax, Power4 } from "gsap";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import $ from "jquery";
import CodepenImg from "../images/projects/aes.png";
import SimpsonsImg from "../images/projects/lesss.png";
import DrumkitImg from "../images/projects/lego.png";
import ChatImg from "../images/projects/Screenshot 2024-02-18 232854.png";
import ImageSearchImg from "../images/projects/t.png";
import MoviesSearchImg from "../images/projects/vv.png";
import ExpenseTrackerImg from "../images/projects/ass.png";
import TravelWebImg from "../images/projects/odin.png";
import "../css/projectsdetails.css";

export const ProjectsDetails = () => {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    ScrollMagicPluginGsap(ScrollMagic, gsap);

    $(".project").each(function () {
      var projectInfo = $(this).find(".project-info");
      var smallTitle = $(this).find(".small-title");
      var projectLink = $(this).find(".project-link");
      var title = $(this).find("h4");

      var animateIn = new TimelineMax();

      animateIn
        .from(
          projectInfo,
          0.5,
          {
            scaleY: 0,
            transformOrigin: "bottom left",
          },
          "-=0.5"
        )
        .from(
          smallTitle,
          0.3,
          { autoAlpha: 0, y: 30, ease: Power4.easeOut },
          "-=0.8"
        )
        .from(
          projectLink,
          0.3,
          {
            autoAlpha: 0,
            y: 30,
            ease: Power4.easeOut,
          },
          "-=0.8"
        )
        .from(
          title,
          0.3,
          {
            autoAlpha: 0,
            y: 30,
            ease: Power4.easeOut,
          },
          "-=0.8"
        );

      new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: "onEnter",
        offset: 100,
      })
        .setTween(animateIn)
        .addTo(controller);
    });
  }, []);

  return (
    <React.Fragment>
      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img className="project-img cdpn" src={CodepenImg} alt="codepen" />
          </div>
          <div className="project-info">
            <p className="small-title">Aespa</p>
            <h4>Drama</h4>
            <a
              className="project-link"
              href="https://kabir-narula.github.io/Aespa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it!
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img className="project-img" src={SimpsonsImg} alt="simpsons" />
          </div>
          <div className="project-info">
            <p className="small-title">
              #Chaewon
            </p>
            <h4>Lesserafim Fan-Page</h4>
            <a
              className="project-link"
              href="https://odd-cyan-butterfly-shoe.cyclic.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it!
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img className="project-img" src={DrumkitImg} alt="drumkit" />
          </div>
          <div className="project-info">
            <p className="small-title">Lego-Sets</p>
            <h4>Node.js App to render lego API</h4>
            <a
              className="project-link"
              href="https://github.com/Kabir-Narula/WEB322-LegoSets"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it!
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img className="project-img" src={ChatImg} alt="chat" />
          </div>
          <div className="project-info">
            <p className="small-title">Final Project for WEB222</p>
            <h4>Music App</h4>
            <a
              className="project-link"
              href="https://kabir-narula.github.io/WEB222-Vintage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it!
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img
              className="project-img"
              src={ImageSearchImg}
              alt="img search"
            />
          </div>
          <div className="project-info">
            <p className="small-title">First project for Web422</p>
            <h4>Rental API</h4>
            <a
              className="project-link"
              href="https://kabir-narula.github.io/Web422-A1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try It!
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img
              className="project-img"
              src={MoviesSearchImg}
              alt="movies search"
            />
          </div>
          <div className="project-info">
            <p className="small-title">Final Project for IPC144</p>
            <h4>Clinic App</h4>
            <a
              className="project-link"
              href="https://github.com/Kabir-Narula/Veterinarian-Clinic-System"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try It!
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="grid-12 project project-left">
          <div className="box">
            <img className="project-img" src={ExpenseTrackerImg} alt="" />
          </div>
          <div className="project-info">
            <p className="small-title">Final Project for OOP345</p>
            <h4>Assembly Line Simulator</h4>
            <a
              className="project-link"
              href="https://github.com/Kabir-Narula/CPP-AssemblyLine-Simulator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try It!
            </a>
          </div>
        </div>
      </section>

      <section className="end">
        <div className="grid-12 project project-left">
          <div className="box">
            <img className="project-img" src={TravelWebImg} alt="" />
          </div>
          <div className="project-info">
            <p className="small-title">First Project for Web</p>
            <h4>Odin Project</h4>
            <a
              className="project-link"
              href="https://github.com/Kabir-Narula/The-Odin-Project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it!
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
