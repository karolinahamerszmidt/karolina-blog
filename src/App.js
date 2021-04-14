import "./App.css";
import baner from "./baner_small.jpg";
import ubrania from "./ubrania_small.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import karolina from "./karolina_aboutme_small.jpg";
import uroda from "./uroda.jpg";
import travel from "./travel.jpg";
import lifestale from "./lifestale.jpg";
import { Menu } from "./Menu/Menu";
import { Beauty } from "./Beauty/Beauty";
import { MenuMobile } from "./MenuMobile/MenuMobile";
import { Logo } from "./Logo/Logo";
import { Posty } from "./Posty/Posty";
import { SecondSubPage } from "./SecondSubPage/SecondSubPage";

const Podstrona = ({ tytul, data, zdjecie, tekst }) => (
  <div>
    <div className="podstronaTytul">{tytul}</div>
    <div className="podstronaData">{data}</div>
    <div className="podstronaTekst">{tekst}</div>
  </div>
);
function App() {
  const [strona, ustawStrone] = useState("stronaGlowna");
  return (
    <div className={strona === "aboutMe" ? "kartka kartkaAboutMe" : "kartka"}>
      <Menu ustawStrone={ustawStrone} />
      <MenuMobile />
      <Logo />
      {strona === "aboutMe" ? (
        <div className="aboutMe__banerTekstAbout">About</div>
      ) : null}
      {strona === "aboutMe" ? (
        <div className="aboutMe__banerTekst">
          Serdecznie witam na moim blogu!{" "}
        </div>
      ) : null}
      {strona === "stronaGlowna" ? (
        <div className="baner">
          <img src={baner} className="banerImage" />
        </div>
      ) : null}
      <div className="padding"></div>
      {strona === "beauty" ? <Beauty /> : null}
      <div>
        {strona === "stronaGlowna" ? <Posty ustawStrone={ustawStrone} /> : null}
        {strona === "post1" ? (
          <Podstrona
            tytul="Wieczorki kawowe z dobra ksiazka"
            data="9 kwietnia 2021"
            zdjecie={ubrania}
            tekst=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum."
          />
        ) : null}
        {strona === "post2" ? (
          <Podstrona
            tytul="Wieczorki herbaciane z dobra ksiazka"
            data="7 kwietnia 2021"
            zdjecie={ubrania}
            tekst=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum."
          />
        ) : null}
        {strona === "post3" ? (
          <Podstrona
            tytul="Wieczorki z goraca woda i tv"
            data="6 kwietnia 2021"
            zdjecie={ubrania}
            tekst=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum."
          />
        ) : null}

        {strona === "aboutMe" ? (
          <div className="aboutMeBaner">
            <div className="lewyBaner">
              <img className="karolinaAboutMePic" src={karolina} />
            </div>
            <div className="prawyBaner">
              <div className="imieNazwiskoTekst">
                W 2018 razem z mężem podjęłam decyzje o wyjeździe do Hamburga. W
                ciągu ostatnich trzech lat mieszkałam w Brukseli i w Krakowie.
                Obecnie jestem w Rotterdamie. Jestem wielką miłośniczką jogi i
                pilatesu. Lubie odkrywać, próbować i odtwarzać ciekawe potrawy.
                Moim marzeniem jest uczestnictwo w zajęciach jogi & pilatesu w
                każdym mieście które odwiedzam.
              </div>
              <div className="imieNazwisko">Karolina Hamerszmidt</div>
            </div>
          </div>
        ) : null}
      </div>

      {strona === "stronaGlowna" ? <SecondSubPage /> : null}

      {strona === "aboutMe" ? (
        <div className="aboutMe__banerBottom">
          <div className="aboutMe__banerBottomObrazek">
            <img src={uroda} className="aboutMe__banerBottomObrazekObrazek" />
          </div>
          <div className="aboutMe__banerBottomObrazek">
            <img src={travel} className="aboutMe__banerBottomObrazekObrazek" />
          </div>
          <div className="aboutMe__banerBottomObrazek">
            <img
              src={lifestale}
              className="aboutMe__banerBottomObrazekObrazek"
            />
          </div>
        </div>
      ) : null}

      <div className="bottomText">
        <div className="bottomTextKolumnaL">
          <div className="bottomText_sayHello"> Say hello</div>
          <div className="bottomTextEmail">karolina@hamerszmidt.eu</div>
        </div>
        <div className="bottomTextKolumnaS">MASCHCRISP</div>
        <div className="bottomTextKolumnP">
          <div
            className="bottomTextKolumnP__Text"
            onClick={() => ustawStrone("stronaGlowna")}
          >
            Home
          </div>
          <div
            className="bottomTextKolumnP__Text"
            onClick={() => ustawStrone("aboutMe")}
          >
            About
          </div>
          <div
            className="bottomTextKolumnP__Text"
            onClick={() => ustawStrone("aboutMe")}
          >
            Blog
          </div>
        </div>
      </div>

      <div className="socialMedia">
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
      </div>

      <div className="stopka">
        <div className="copyright"> MASHCRISP. Wszelkie prawa zastrzezone</div>
      </div>
    </div>
  );
}

export default App;
