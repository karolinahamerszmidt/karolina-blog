import logo from "./logo.svg";
import "./App.css";
import baner from "./baner_small.jpg";
import notatki from "./notatki_small.jpg";
import girl from "./girl_small.jpg";
import ubrania from "./ubrania_small.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import karolina from "./karolina_aboutme_small.jpg";
import biuro from "./biuro_small.jpg";
import bed from "./bed_small.jpg";
import { PersonalSkills } from "./PersonalSkills";
import uroda from "./uroda.jpg";
import travel from "./travel.jpg";
import lifestale from "./lifestale.jpg";
import { SearchForm } from "./SearchForm/SearchForm";

const Post = ({ tytul, data, zdjecie, onClick }) => (
  <div onClick={onClick} className="post">
    <div className="postImage">
      <img src={zdjecie} className="postImageOne" />
    </div>
    <div className="tytul">{tytul}</div>
    <div className="data"> {data}</div>
  </div>
);

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
      <div className="pasek">
        <div className="menu" onClick={() => ustawStrone("stronaGlowna")}>
          Home
        </div>
        <div className="menu" onClick={() => ustawStrone("aboutMe")}>
          About
        </div>
        <div className="menu">Contact</div>
        <div className="pasekSocialMedia">
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
      </div>

      <div className="logoBaner">MASHCRISP</div>
      {strona === "aboutMe" ? (
        <div className="aboutMe__banerTekstAbout">About</div>
      ) : null}
      {strona === "aboutMe" ? (
        <div className="aboutMe__banerTekst">
          Serdecznie witam na moim blogu!{" "}
        </div>
      ) : null}
      {strona !== "aboutMe" ? (
        <div className="baner">
          <img src={baner} className="banerImage" />
        </div>
      ) : null}
      <div className="padding"></div>
      <div>
        {strona === "stronaGlowna" ? (
          <div className="posty">
            <Post
              onClick={() => ustawStrone("post1")}
              tytul="Wieczorki kawowe z dobra ksiazka"
              data="9 kwietnia 2021"
              zdjecie={ubrania}
            />
            <Post
              onClick={() => ustawStrone("post2")}
              tytul="Wieczorki herbaciane z dobra ksiazka"
              zdjecie={girl}
              data="7 kwietnia 2021"
            />
            <Post
              onClick={() => ustawStrone("post3")}
              tytul="Wieczorki z goraca woda i tv"
              data="6 kwietnia 2021"
              zdjecie={notatki}
            />
          </div>
        ) : null}
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

      {strona === "stronaGlowna" ? (
        <div className="drugaPodStrona">
          <div className="drugaPodStrona__zdjecie">
            <div className="drugaPodStrona__zdjeciePic">
              <img src={biuro} className="drugaPodStrona__zdjeciePicPic" />
            </div>
            <div className="drugaPodStrona__zdjeciePic">
              <img src={bed} className="drugaPodStrona__zdjeciePicPic" />
            </div>
          </div>
          <div className="drugaPodStrona__tekst">
            <div className="drugaPodStrona__profilePic">
              <img src={karolina} className="drugaPodStrona__profilePicImg" />
            </div>
            <div className="drugaPodStrona__aboutMe">
              <div className="drugaPodStrona__aboutMeTytul">
                Karolina Hamerszmidt
              </div>
              <div className="drugaPodStrona__aboutMeTekst">
                Proud Varsavian girl, currently living in The Netherlands
              </div>
            </div>
            <div className="drugaPodStrona__socialMedia">
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
      ) : null}

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
