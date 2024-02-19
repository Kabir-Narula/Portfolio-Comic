import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import Typewriter from "typewriter-effect";
import Delay from "react-delay";
import "../css/scene5.css";

export const Scene5 = () => {
  let imageRef = useRef(null);

  const laptopMessages = `<span class="messages-scene5">
  I AM A HACKER \n I'm breaking everything right now \n destruction chaos cataclysm \n blah blah blah \n blow up everything? Y / N xD</span>`;

  const [buttons, setButtons] = useState(false);

  useEffect(() => {
    TweenMax.staggerTo(imageRef, 1, {
      opacity: 1,
      y: -100,
      ease: Power3.easeInOut,
      delay: 0.3,
    });
  }, []);

  return (
    <div className="container bg-scene5">
      <div>
        <img
          ref={(el) => {
            imageRef = el;
          }}
          className="img-scene5"
          alt="me"
        />
        <span className="base"></span>
      </div>

      <Delay wait={1200}>
        <div className="text txt-scene5">
          <Typewriter
            options={{
              delay: 50,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(laptopMessages)
                .callFunction(() => {
                  setButtons(!buttons);
                })
                .start();
            }}
          />
        </div>
      </Delay>

      <div>
        <Link to="/scene4">
          <button className={buttons ? "back-scene" : "back-scene-changed"}>
            Back
          </button>
        </Link>
        <Link to="/scene6">
          <button className={buttons ? "next-scene" : "next-scene-changed"}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
