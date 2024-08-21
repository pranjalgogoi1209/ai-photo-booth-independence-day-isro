import React from "react";
import styles from "./homePage.module.css";

import { Link } from "react-router-dom";
import { cardsArr } from "../../utils/avatar/cards";

import one from "./../../assets/home/1.png";
import two from "./../../assets/home/2.png";
import three from "./../../assets/home/3.png";
import four from "./../../assets/home/4.png";
import five from "./../../assets/home/5.png";
import six from "./../../assets/home/6.png";

export default function HomePage() {
  const imgsArr = [one, two, three, four, five, six];

  return (
    <div className={`flex-col-center ${styles.HomePage}`}>
      <div className={`flex-col-center ${styles.avatarContainer}`}>
        {imgsArr?.map((item, idx) => (
          <div
            key={idx}
            className={`flex-row-center ${styles.singleImg} ${
              idx == 2 ? styles.exception : ""
            }`}
          >
            <img src={item} alt="avatar" />
          </div>
        ))}
      </div>

      <Link to={"/camera"}>
        <button className={`btn1`}>START</button>
      </Link>
    </div>
  );
}
