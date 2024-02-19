import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import Bg from "../images/backgrounds/bg-scene7.jpg";
import "../css/scene7.css";

export const Scene7 = () => {
  let imageRef = useRef(null);

  const firstSpeech = `<span class="first-speech-scene7">I hate rain!</span>`;
  const secondSpeech = `<span class="second-speech-scene7">I'd better \n go home...</span>`;

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
    <div className="container">
      <div className="bg-scene7">
        <img src={Bg} alt="bg" />
      </div>

      <div className="rain"></div>

      <div>
        <img
          ref={(el) => {
            imageRef = el;
          }}
          className="main-image img-scene7"
          alt="bad guy"
        />
      </div>

      <Delay wait={1200}>
        <div className="text txt-scene7">
          <Typewriter
            options={{
              delay: 50,
              deleteSpeed: 10,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(firstSpeech)
                .pauseFor(2500)
                .deleteChars(15)
                .typeString(secondSpeech)
                .callFunction(() => {
                  setButtons(!buttons);
                })
                .start();
            }}
          />
        </div>
      </Delay>

      <div>
        <Link to="/scene6">
          <button className={buttons ? "back-scene" : "back-scene-changed"}>
            Back
          </button>
        </Link>
        <Link to="/scene8">
          <button className={buttons ? "next-scene" : "next-scene-changed"}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
