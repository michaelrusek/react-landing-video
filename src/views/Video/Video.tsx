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
        Wyszkoliłem, przygotowałem do biznesu kilka tysięcy osób. Sprawdź jak
        mogę pomóc również Tobie.
      </h2>
      <div className={styles.responsive}>
        <YouTube videoId="h4EPzxhUWgc" opts={opts} />
      </div>

      <a className={styles.button} href="https://calendly.com/irektomczyk79">
        Umów się na rozmowę
      </a>
    </div>
  );
};

export default Video;
