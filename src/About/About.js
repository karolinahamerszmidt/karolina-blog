import React from "react";
import "./About.css";
import karolina from "../karolina_aboutme_small.jpg";
import uroda from "../uroda.jpg";
import travel from "../travel.jpg";
import lifestale from "../lifestale.jpg";

export const About = () => (
  <div>
    <div className="About__baner ">
      <div className="About__lewyBaner">
        <img className="About__karolinaAboutMePic" src={karolina} />
      </div>
      <div className="About__prawyBaner">
        <div className="About__imieNazwiskoTekst">
          W 2018 razem z mężem podjęłam decyzje o wyjeździe do Hamburga. W ciągu
          ostatnich trzech lat mieszkałam w Brukseli i w Krakowie. Obecnie
          jestem w Rotterdamie. Jestem wielką miłośniczką jogi i pilatesu. Lubie
          odkrywać, próbować i odtwarzać ciekawe potrawy. Moim marzeniem jest
          uczestnictwo w zajęciach jogi & pilatesu w każdym mieście które
          odwiedzam.
        </div>
        <div className="About__imieNazwisko">Karolina Hamerszmidt</div>
      </div>
    </div>
    <div className="About__banerBottom">
      <div className="About__banerBottomObrazek">
        <img src={uroda} className="About__banerBottomObrazekObrazek" />
      </div>
      <div className="About__banerBottomObrazek">
        <img src={travel} className="About__banerBottomObrazekObrazek" />
      </div>
      <div className="About__banerBottomObrazek">
        <img src={lifestale} className="About__banerBottomObrazekObrazek" />
      </div>
    </div>
  </div>
);
