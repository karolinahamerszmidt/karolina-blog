import logo from "./logo.svg";
import "./App.css";
import baner from "./baner.jpg";
import notatki from "./notatki.jpg";
import girl from "./girl.jpg";
import ubrania from "./ubrania.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import karolina from "./karolina_aboutme.jpg";
import biuro from "./biuro.jpg";
import bed from "./bed.jpg";

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
        {" "}
        <div onClick={() => ustawStrone("stronaGlowna")} className="logo">
          MASHCRISP
        </div>
        <div onClick={() => ustawStrone("aboutMe")}>About me</div>
        <div>Blog</div>
        <div>Contact</div>
      </div>
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
              <div className="imieNazwisko">Karolina Hamerszmidt</div>
              <div className="imieNazwiskoTekst">
                In tegenstelling tot wat algemeen aangenomen wordt is Lorem
                Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in
                een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus
                meer dan 2000 jaar oud. Richard McClintock, een professor latijn
                aan de Hampden-Sydney College in Virginia, heeft één van de meer
                obscure latijnse woorden, consectetur, uit een Lorem Ipsum
                passage opgezocht, en heeft tijdens het zoeken naar het woord in
                de klassieke literatuur de onverdachte bron ontdekt. Lorem Ipsum
                komt uit de secties 1.10.32 en 1.10.33 van "de Finibus Bonorum
                et Malorum" (De uitersten van goed en kwaad) door Cicero,
                geschreven in 45 v.Chr. Dit boek is een verhandeling over de
                theorie der ethiek, erg populair tijdens de renaissance. De
                eerste regel van Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                komt uit een zin in sectie 1.10.32.
              </div>
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
                Proud Varsavian girl, curently living in The Netherlands
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
          </div>
        </div>
      ) : null}

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
