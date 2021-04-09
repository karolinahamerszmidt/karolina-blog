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
    <div className="kartka">
      <div className="pasek">
        {" "}
        <div onClick={() => ustawStrone("stronaGlowna")} className="logo">
          MASHCRISP
        </div>
        <div>About me</div>
        <div>Blog</div>
        <div>Contact</div>
      </div>
      <div className="baner">
        <img src={baner} className="banerImage" />
      </div>
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
