import React, { useEffect } from "react";
import "../css/scrolldown.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollDown = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".scrolldown-wrapper", {
      scrollTrigger: {
        scrub: true,
      },
      opacity: -1,
    });
  }, []);

  return (
    <div className="scrolldown-wrapper">
      <div className="scrolldown">
        <svg height="30" width="10">
          <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
          <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
        </svg>
      </div>
      <p className="scrolldown-text">Scroll down</p>
    </div>
  );
};
