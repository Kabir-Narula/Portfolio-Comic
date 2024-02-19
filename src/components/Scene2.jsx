import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene2.css";

export const Scene2 = () => {
  let imageRef = useRef(null);

  const firstSpeech = `<span class="first-speech-scene2">I love \n coding \n and listening music</span>`;
  const secondSpeech = `<span class="second-speech-scene2">You can contact me \n in the "alien" section</span>`;
  const thirdSpeech = `<span class="third-speech-scene2">Wait...</span>`;
  const fourthSpeech = `<span class="fourth-speech-scene2">you'll never get \n the job...</span>`;
  const fifthSpeech = `<span class="fifth-speech-scene2">What..?</span>`;

  const [mainImage, setMainImage] = useState(false);
  const [mainImage2, setMainImage2] = useState(false);
  const [mainImage3, setMainImage3] = useState(false);
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
    <div className="container bg-scene2">
      <div>
        <img
          ref={(el) => {
            imageRef = el;
          }}
          className={
            mainImage
              ? "toggle-main-image img-scene2-chg"
              : "main-image img-scene2"
          }
          alt="me"
        />
      </div>

      <div>
        <img
          className={
            mainImage2
              ? "main-image img2-scene2"
              : "toggle-main-image img2-scene2-chg"
          }
          alt="bad guy"
        />
      </div>

      <div>
        <img
          className={
            mainImage3
              ? "main-image img3-scene2"
              : "toggle-main-image img3-scene2-chg"
          }
          alt="me"
        />
      </div>

      <Delay wait={1200}>
        <div
          className={text ? "toggle-text txt-scene2-chg" : "text txt-scene2"}
        >
          <Typewriter
            options={{
              strings: [firstSpeech, secondSpeech],
              autoStart: true,
              delay: 50,
              deleteSpeed: 10,
              pauseFor: 2000,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .callFunction(() => {
                  setMainImage(!mainImage);
                  setMainImage2(!mainImage2);
                  setText(!text);
                })
                .typeString(thirdSpeech)
                .pauseFor(2500)
                .deleteChars(10)
                .typeString(fourthSpeech)
                .pauseFor(2500)
                .callFunction(() => {
                  setMainImage(!mainImage);
                })
                .deleteChars(33)
                .callFunction(() => {
                  setText(text);
                  setMainImage2(mainImage2);
                  setMainImage3(!mainImage3);
                })
                .typeString(fifthSpeech)
                .callFunction(() => {
                  setButtons(!buttons);
                });
            }}
          />
        </div>
      </Delay>

      <div>
        <Link to="/">
          <button className={buttons ? "back-scene" : "back-scene-changed"}>
            Back
          </button>
        </Link>
        <Link to="/scene3">
          <button className={buttons ? "next-scene" : "next-scene-changed"}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
