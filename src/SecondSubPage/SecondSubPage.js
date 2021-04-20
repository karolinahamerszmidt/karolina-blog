import React from "react";
import "./SecondSubPage.css";
import biuro from "../biuro_small.jpg";
import bed from "../bed_small.jpg";
import karolina from "../karolina_aboutme_small.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { PersonalSkills } from "../PersonalSkills";
import { SearchForm } from "../SearchForm/SearchForm";

export const SecondSubPage = () => {
  return (
    <div className="SecondSubPage">
      <div className="SecondSubPage__zdjecie">
        <div className="SecondSubPage__zdjeciePic">
          <img src={biuro} className="SecondSubPage__zdjeciePicPic" />
        </div>
        <div className="SecondSubPage__zdjeciePic">
          <img src={bed} className="SecondSubPage__zdjeciePicPic" />
        </div>
      </div>
      <div className="SecondSubPage__tekst">
        <div className="SecondSubPage__profilePic">
          <img src={karolina} className="SecondSubPage__profilePicImg" />
        </div>
        <div className="SecondSubPage__aboutMe">
          <div className="SecondSubPage__aboutMeTytul">
            Karolina Hamerszmidt
          </div>
          <div className="SecondSubPage__aboutMeTekst">
            I'm a girl from Warsaw, currently living in The Netherlands
          </div>
        </div>
        <div className="SecondSubPage__socialMedia">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCxWIPx8fsoJMLBCY1e4BGpA"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a target="_blank" href="https://www.instagram.com/hamerszmidt/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/karolina.hamerszmidt/"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <PersonalSkills />
        <SearchForm />
      </div>
    </div>
  );
};
