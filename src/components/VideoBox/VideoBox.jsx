import React from "react";
import styles from "./VideoBox.module.css";

const VideoBox = ({ video }) => {
  return (
    <div className={styles.videoBox}>
      <iframe
        title={video.titulo}
        width="200"
        height="auto"
        src={video.link}
        frameBorder="0"
        allowFullScreen
        className={styles.video}
      ></iframe>
      <div className={styles.title}>{video.titulo}</div>
    </div>
  );
};

export default VideoBox;
