import React from "react";
import styles from "./Landing.module.scss";
import CherryBlossom from "./../../video/cherry-blossom.webm";

const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <video
        className={styles.cherryBlossomVideo}
        src={CherryBlossom}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Landing;
