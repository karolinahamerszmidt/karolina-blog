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
    <div className="Menu__dropdown">
      <button className="Menu__dropbtn">Blog</button>
      <div className="Menu__dropdown-content">
        <a onClick={() => ustawStrone("beauty")} href="#">
          Beauty
        </a>
        <a onClick={() => ustawStrone("travel")} href="#">
          Travel
        </a>
        <a onClick={() => ustawStrone("lifestyle")} href="#">
          Lifestyle
        </a>
      </div>
    </div>
    <div className="Menu__button" onClick={() => ustawStrone("contact")}>
      Contact
    </div>
    <div className="Menu__button" onClick={() => ustawStrone("shop")}>
      Shop
    </div>
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
