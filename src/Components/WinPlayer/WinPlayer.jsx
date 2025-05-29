import React, { useRef, useState } from "react";
import styles from "./WinPlayer.module.css";
import { getImageUrl } from "../../utils";

export const WinPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.playerWindow}>
      <div className={styles.titleBar}>
        <span className={styles.titleText}>WinPlayer 3</span>
        <div className={styles.windowButtons}>
          <button className={styles.btn}>–</button>
          <button className={styles.btn}>□</button>
          <button className={styles.btn}>×</button>
        </div>
      </div>
      <div className={styles.playerContent}>
        <img
          src={getImageUrl("album/sunflower.jpeg")}
          alt="Sunflower Album Art"
          className={styles.albumArt}
        />
        <div className={styles.controls}>
          <button onClick={togglePlay} className={styles.playBtn}>
            {isPlaying ? "❚❚" : "▶"}
          </button>
          <span className={styles.songTitle}>Sunflower - Post Malone & Swae Lee</span>
        </div>
        <audio ref={audioRef} src="/audio/sunflower.mp3" />
      </div>
    </div>
  );
};
