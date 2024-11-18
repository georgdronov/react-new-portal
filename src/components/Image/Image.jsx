import React from "react";
import styles from "./styles.module.css";

export default function Image({ image }) {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="banner" className={styles.image} /> : null}
    </div>
  );
}
