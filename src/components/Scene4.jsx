import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene4.css";

export const Scene4 = () => {
  let image1Ref = useRef(null);
  let image2Ref = useRef(null);

  const firstSpeech = `<span class="first-speech-scene4">What are you saying?!</span>`;
  const secondSpeech = `<span class="second-speech-scene4">Just watch...</span>`;

  const [buttons, setButtons] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo([image1Ref, image2Ref], 0.9, {
      opacity: 1,
      x: 0,
      ease: Power3.easeInOut,
      delay: 0.3,
    });

    let tl = new TimelineLite();
    tl.to([image1Ref], 0, { x: -700 });
    tl.to([image2Ref], 0, { x: 700 });
  }, []);

  return (
    <div className="container" style={{ backgroundColor: "black" }}>
      <div className="bg-scene4">
        <img
          ref={(el) => {
            image1Ref = el;
          }}
          className="main-image img-scene4"
          alt="me"
        />
      </div>

      <Delay wait={1500}>
        <div className="text txt-scene4">
          <Typewriter
            options={{
              delay: 45,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter.typeString(firstSpeech).start();
            }}
          />
        </div>
      </Delay>

      <div className="bg2-scene4">
        <img
          ref={(el) => {
            image2Ref = el;
          }}
          className="main-image img2-scene4"
          alt="bad guy"
        />
      </div>

      <Delay wait={4500}>
        <div className="text txt2-scene4">
          <Typewriter
            options={{
              delay: 40,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
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
        <Link to="/scene3">
          <button className={buttons ? "back-scene" : "back-scene-changed"}>
            Back
          </button>
        </Link>
        <Link to="/scene5">
          <button className={buttons ? "next-scene" : "next-scene-changed"}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
