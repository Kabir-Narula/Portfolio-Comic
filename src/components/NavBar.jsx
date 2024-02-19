import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import ReactHowler from "react-howler";
import Chopin from "../audio/chopin.webm";
import Github from "../images/icons/github.png";
import Linkedin from "../images/icons/linkedin.png";
import "../css/navbar.css";

export const NavBar = () => {
  let catRef = useRef(null);
  let alienRef = useRef(null);
  let shuttleRef = useRef(null);
  let soundRef = useRef(null);
  let codepen = useRef(null);
  let github = useRef(null);
  let linkedin = useRef(null);

  const [music, setMusic] = useState(false);
  const [musicIcon, setMusicIcon] = useState(false);

  const handlePlay = () => {
    setMusic(true);
  };

  const handlePause = () => {
    setMusic(false);
  };

  const handleMusicIcon = () => {
    setMusicIcon(!musicIcon);
  };

  useEffect(() => {
    TweenMax.staggerFrom(
      [catRef, alienRef, shuttleRef, soundRef, codepen, github, linkedin],
      0.8,
      { opacity: 0, x: 40, ease: Power3.easeOut },
      0.2
    );
  }, []);

  return (
    <nav className="navbar">
      <ReactHowler src={Chopin} playing={music} loop={true} />
      <ul className="navbar-nav">
        <li className="logo">
          <Link to="/" className="nav-link">
            <span className="link-text logo-text">HOME</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/scene1" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="cat"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-cat fa-w-16 fa-9x"
              ref={(el) => {
                catRef = el;
              }}
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">STORY</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="alien-monster"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
              ref={(el) => {
                alienRef = el;
              }}
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M160,320h64V224H160Zm192-96v96h64V224Z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">ABOUT ME</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="space-shuttle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
              ref={(el) => {
                shuttleRef = el;
              }}
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z"
                  className="fa-primary"
                ></path>
                <path
                  fill="currentColor"
                  d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z"
                  className="fa-secondary"
                ></path>
              </g>
            </svg>
            <span className="link-text">PROJECTS</span>
          </Link>
        </li>

        <li className="nav-item" onClick={music ? handlePause : handlePlay}>
          <span className="nav-link" onClick={handleMusicIcon}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 18 18"
              fill="currentColor"
              ref={(el) => {
                soundRef = el;
              }}
            >
              <path
                d="M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z"
                className="svg-inline--fa fa-secondary"
              ></path>
              <path
                d="M14.3025 3.69751
                    C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001
                    C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025"
                style={{ opacity: 1, transitionDelay: "150ms" }}
                className={musicIcon ? "fa-primary" : "fa-primary-chg"}
              ></path>
              <path
                d="M11.655 6.34501
                C12.358 7.04824 12.753 8.00189 12.753 8.99626
                C12.753 9.99063 12.358 10.9443 11.655 11.6475"
                style={{ opacity: 1, transitionDelay: "0ms" }}
                className={musicIcon ? "fa-primary" : "fa-primary-chg"}
              ></path>
            </svg>
            <span className="link-text">PLAY MUSIC</span>
          </span>
        </li>

        <li className="nav-item social codepen-li">
          <a
            className="nav-link"
            href="https://bungostraydogs.fandom.com/wiki/Osamu_Dazai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              id="Capa_1"
              data-name="Capa 1"
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
              fill="#FFF"
              fillOpacity="0.9"
              stroke="#FFF"
              strokeWidth="6"
              ref={(el) => {
                codepen = el;
              }}
            >
              <path
                d="M466 18h-32v32h32a32 32 0 0132 32v384a32 32 0 01-32 32H82a32 32 0 01-32-32V82a32 32 0 0132-32h192V18H82a64 64 0 00-64 64v384a64 64 0 0064 64h384a64 64 0 0064-64V82a64 64 0 00-64-64z"
                transform="translate(-18 -18)"
              />
              <path d="M370 18h32v32h-32z" transform="translate(-18 -18)" />
              <path d="M306 18h32v32h-32z" transform="translate(-18 -18)" />
              <path
                d="M98 209.31v113.38l176 114.38 176-114.38V209.31L274 94.93zm32 38.18L158.48 266 130 284.51zm144 151.44L143.36 314l44.48-28.91 86.16 56 86.16-56L404.64 314 274 398.93zM217.2 266l56.8-36.93L330.8 266 274 302.93zM418 284.51L389.52 266 418 247.49zm-57.84-37.6l-86.16-56-86.16 56L143.36 218 274 133.07 404.64 218l-44.48 28.91z"
                transform="translate(-18 -18)"
              />
            </svg>

            <span className="link-text">Dazai</span>
          </a>
        </li>

        <li className="nav-item social github-li">
          <a
            className="nav-link"
            href="https://github.com/Kabir-Narula"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Github}
              className="github"
              style={{ width: "2.2em", margin: "0 1rem" }}
              alt="github"
              ref={(el) => {
                github = el;
              }}
            />
            <span className="link-text">GITHUB</span>
          </a>
        </li>

        <li className="nav-item social">
          <a
            className="nav-link"
            href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BpP4DBORhTT2g3j3Z8CHb7A%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Linkedin}
              className="linkedin"
              style={{
                width: "2.2em",
                margin: "0 1rem",
                WebkitFilter: "invert(100%)",
                filter: "invert(100%)",
              }}
              alt="linkedin"
              ref={(el) => {
                linkedin = el;
              }}
            />
            <span className="link-text">LINKEDIN</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
