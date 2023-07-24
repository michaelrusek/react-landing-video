import React from "react";
import styles from "./Video.module.css";
import YouTube from "react-youtube";

const Video = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={styles.video}>
      <h2 className={styles.heading}>
        Jak zrobić AUTOWEBINAR, który zarabia MILION złotych rocznie POznaj moje
        'know how'
      </h2>
      <div className={styles.responsive}>
        <YouTube videoId="M2YkYr9oyV8" opts={opts} />
      </div>

      <a className={styles.button} href="https://calendly.com/irektomczyk79">
        Chcę o tym pogadać - Zadzwoń do mnie
      </a>
    </div>
  );
};

export default Video;
