import React from "react";
import styles from "./header.module.css";

import header from "./../../assets/header/header.png";

export default function Header() {
  return (
    <div className={`flex-row-center ${styles.Header}`}>
      <div className={`flex-row-center ${styles.imgContainer}`}>
        <img src={header} alt="logo" />
      </div>
    </div>
  );
}
