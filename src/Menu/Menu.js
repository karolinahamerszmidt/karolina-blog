import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Menu.css";

export const Menu = ({ ustawStrone }) => (
  <div className="Menu">
    <div className="Menu__button" onClick={() => ustawStrone("stronaGlowna")}>
      Home
    </div>
    <div className="Menu__button" onClick={() => ustawStrone("aboutMe")}>
      About
    </div>
    <div class="Menu__dropdown">
      <button class="Menu__dropbtn">Blog</button>
      <div class="Menu__dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div className="Menu__button">Contact</div>
    <div className="Menu__socialMedia">
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCxWIPx8fsoJMLBCY1e4BGpA"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a target="_blank" href="https://www.instagram.com/hamerszmidt/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a target="_blank" href="https://www.facebook.com/karolina.hamerszmidt/">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  </div>
);
