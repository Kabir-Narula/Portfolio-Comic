import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene3.css";

export const Scene3 = () => {
  let imageRef = useRef(null);

  const firstSpeech = `<span class="first-speech-scene3">oh sorry, \n I forgot to introduce \n myself...</span>`;
  const secondSpeech = `<span class="second-speech-scene3">
  I'm the guy who \n wants to destroy \n your website \n for no reason</span>`;
  const thirdSpeech = `<span class="third-speech-scene3">YES... \n FOR NO \n REASON!</span>`;

  const [mainImage, setMainImage] = useState(false);
  const [text, setText] = useState(false);
  const [buttons, setButtons] = useState(false);

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
    <div className="container bg-scene3">
      <div>
        <img
          ref={(el) => {
            imageRef = el;
          }}
          className={
            mainImage
              ? "toggle-main-image img-scene3-chg"
              : "main-image img-scene3"
          }
          alt="me"
        />
      </div>

      <Delay wait={1200}>
        <div
          className={text ? "toggle-text txt-scene3-chg" : "text txt-scene3"}
        >
          <Typewriter
            options={{
              strings: [firstSpeech],
              autoStart: true,
              delay: 50,
              deleteSpeed: 10,
              pauseFor: 2000,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(secondSpeech)
                .pauseFor(2000)
                .deleteChars(65)
                .callFunction(() => {
                  setMainImage(!mainImage);
                  setText(!text);
                })
                .typeString(thirdSpeech)
                .callFunction(() => {
                  setButtons(!buttons);
                });
            }}
          />
        </div>
      </Delay>

      <div>
        <Link to="/scene2">
          <button className={buttons ? "back-scene" : "back-scene-changed"}>
            Back
          </button>
        </Link>
        <Link to="/scene4">
          <button className={buttons ? "next-scene" : "next-scene-changed"}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
