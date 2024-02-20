import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene8.css";

export const Scene8 = () => {
  let imageRef = useRef(null);

  const firstSpeech = `<span class="first-speech-scene8">i can't believe \n that worked</span>`;
  const secondSpeech = `<span class="second-speech-scene8">Anyway... \n you can keep \n browsing my web</span>`;

  const [image, setImage] = useState(false);
  const [image2, setImage2] = useState(false);
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
    <div className="container bg-scene8">
      <div>
        <img
          ref={(el) => {
            imageRef = el;
          }}
          scene2
          className={
            image ? "toggle-main-image img-scene8-chg" : "main-image img-scene8"
          }
          alt="me"
        />
      </div>

      <div>
        <img
          className={
            image2
              ? "main-image img2-scene8"
              : "toggle-main-image img2-scene8-chg"
          }
          alt="me"
        />
      </div>

      <Delay wait={1200}>
        <div className="text txt-scene8">
          <Typewriter
            options={{
              delay: 45,
              deleteSpeed: 8,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(firstSpeech)
                .pauseFor(1800)
                .deleteChars(42)
                .callFunction(() => {
                  setImage(!image);
                  setImage2(!image2);
                })
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
        <Link to="/about">
          <button
            className={
              buttons ? "next-scene nxt-btn-scene8" : "next-scene-changed"
            }
          >
            About Me
          </button>
        </Link>
      </div>
    </div>
  );
};
