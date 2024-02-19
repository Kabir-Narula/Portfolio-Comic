import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene1.css";

export const Scene1 = () => {
  let imageRef = useRef(null);

  const firstSpeech = `<span class="first-speech-scene1">Hi! My name is <el>Kabir Narula</el> \n and I am a \n College \n Student...</span>`;
  const secondSpeech = `<span class="second-speech-scene1">I am looking \n for my first job \n as a developer!</span>`;

  const [mainImage, setMainImage] = useState(false);
  const [text, setText] = useState(false);
  const [nextButton, setNextButton] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo(imageRef, 0.9, {
      opacity: 1,
      x: -100,
      ease: Power3.easeInOut,
      delay: 0.3,
    });

    let tl = new TimelineLite();
    tl.to(imageRef, 0, { x: 700 });
  }, []);

  return (
    <div className="container bg-scene1">
      <div>
        <img
          ref={(el) => {
            imageRef = el;
          }}
          className={
            mainImage
              ? "toggle-main-image img-scene1-chg"
              : "main-image img-scene1"
          }
          alt="me"
        />
      </div>

      <Delay wait={1200}>
        <div
          className={text ? "toggle-text txt-scene1-chg" : "text txt-scene1"}
        >
          <Typewriter
            options={{
              strings: [firstSpeech],
              autoStart: true,
              delay: 50,
              deleteSpeed: 10,
              pauseFor: 1500,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .callFunction(() => {
                  setMainImage(!mainImage);
                  setText(!text);
                })
                .typeString(secondSpeech)
                .callFunction(() => {
                  setNextButton(!nextButton);
                });
            }}
          />
        </div>
      </Delay>

      <div>
        <Link to="/scene2">
          <button className={nextButton ? "next-scene" : "next-scene-changed"}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
