import React, { useState } from "react";

import "./home.css";

import earth from "../../assets/svg/earth.png";

import rock from "../../assets/svg/rock.png";
import littleRocks from "../../assets/svg/little_rocks.png";
import rockDown from "../../assets/svg/rockDown.png";
import rocket from "../../assets/svg/rocket.png";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import AnimatedTitle from "./AnimatedTitle";

export default function Home({ showInfoPage, setShowInfoPage, scrollToAbout }) {
  const [rocketLaunch, SetrocketLaunch] = useState(false);
  const handleClick = () => {
    setShowInfoPage(true);
  };
  console.log(showInfoPage);
  const rocketSubmit = () => {
    SetrocketLaunch(true);
  };

  return (
    <div>
      <div className="homeContainer">
        <header></header>

        <img className="rock1" src={rock} alt="the moon" />
        <img className="littleRocks" src={littleRocks} alt="the moon" />
        <img className="rockDown" src={rockDown} alt="the moon" />
        <img className="earth" src={earth} alt="the earth" />
        <div className="h-textContainer">
          <AnimatedTitle />
          <h2> LET'S EXPLORE MY UNIVERSE TOGETHER</h2>

          {scrollToAbout(<button className="button">START MISSION</button>)}
        </div>

        <img className="rock" src={rock} alt="the moon" />
        <div className={rocketLaunch ? "rocketContainer" : ""}></div>
        <img
          className={rocketLaunch ? "rocketLaunch" : "rocket"}
          src={rocket}
          alt="rocket"
        />

        <div className="guide">
          <div className="neon-line1"></div>
          <div className="star1"></div>
          <div className="neon-line2"></div>
        </div>
      </div>
    </div>
  );
}
