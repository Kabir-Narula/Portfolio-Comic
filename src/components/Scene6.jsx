import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene6.css";

export const Scene6 = () => {
  let imageRef = useRef(null);

  const firstSpeech = `<span class="first-speech-scene6">almost done...</span>`;
  const secondSpeech = `<span class="second-speech-scene6">Wait! Wait!</span>`;
  const thirdSpeech = `<span class="third-speech-scene6">Look over there... \n It's a... </span>`;
  const fourthSpeech = `<span class="fourth-speech-scene6">Very hackable \n supercomputer...</span>`;
  const fifthSpeech = `<span class="fifth-speech-scene6">Did you really \n think i would \n believe that?</span>`;
  const sixthSpeech = `<span class="sixth-speech-scene6">oh... \n it started raining</span>`;

  const [text, setText] = useState(false);
  const [text2, setText2] = useState(false);
  const [frame, setFrame] = useState(false);
  const [mainImage2, setMainImage2] = useState(false);
  const [mainImage3, setMainImage3] = useState(false);
  const [buttons, setButtons] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo(imageRef, 0.9, {
      opacity: 1,
      x: 0,
      ease: Power3.easeInOut,
      delay: 5,
    });

    let tl = new TimelineLite();
    tl.to(imageRef, 0, { x: -1000 });
  }, []);

  return (
    <div className="container bg-scene6">
      <div>
        <img className="main-image img-scene6" alt="bad guy" />
      </div>

      <Delay wait={1400}>
        <div
          className={text ? "toggle-text txt-scene6-chg" : "text txt-scene6"}
        >
          <Typewriter
            options={{
              delay: 70,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(firstSpeech)
                .pauseFor(2000)
                .callFunction(() => {
                  setText(!text);
                })
                .start()
                .deleteAll();
            }}
          />
        </div>
      </Delay>

      <div
        className={frame ? "frame-chg" : "frame"}
        ref={(el) => {
          imageRef = el;
        }}
      >
        <img
          className={mainImage2 ? "img2-scene6-chg" : "main-image img2-scene6"}
          alt="me"
        />
        <img
          className={mainImage3 ? "main-image img3-scene6" : "img3-scene6-chg"}
          alt="me"
        />
      </div>

      <Delay wait={5500}>
        <div
          className={text2 ? "toggle-text txt2-scene6-chg" : "text txt2-scene6"}
        >
          <Typewriter
            options={{
              delay: 42,
              deleteSpeed: 10,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(secondSpeech)
                .pauseFor(2000)
                .deleteChars(15)
                .typeString(thirdSpeech)
                .pauseFor(2000)
                .deleteChars(32)
                .typeString(fourthSpeech)
                .pauseFor(2000)
                .deleteChars(42)
                .callFunction(() => {
                  setText2(!text2);
                  setFrame(!frame);
                  setText(!text);
                })
                .typeString(fifthSpeech)
                .pauseFor(2000)
                .deleteChars(42)
                .callFunction(() => {
                  setText(text);
                  setMainImage2(!mainImage2);
                  setMainImage3(!mainImage3);
                  setText2(text2);
                  setFrame(frame);
                })
                .typeString(sixthSpeech)
                .callFunction(() => {
                  setButtons(!buttons);
                })
                .start();
            }}
          />
        </div>
      </Delay>

      <div>
        <Link to="/scene5">
          <button className={buttons ? "back-scene" : "back-scene-changed"}>
            Back
          </button>
        </Link>
        <Link to="/scene7">
          <button className={buttons ? "next-scene" : "next-scene-changed"}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
