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
import { Menu } from "./Menu/Menu";
import { Beauty } from "./Beauty/Beauty";
import { MenuMobile } from "./MenuMobile/MenuMobile";
import { Logo } from "./Logo/Logo";
import { Posty } from "./Posty/Posty";
import { SecondSubPage } from "./SecondSubPage/SecondSubPage";
import { BottomText } from "./BottomText/BottomText";
import { BackToTop } from "./BackToTop/BackToTop";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Travel } from "./Travel/Travel";
import { Lifestyle } from "./Lifestyle/Lifestyle";
import { Shop } from "./Shop/Shop";
import { Product } from "./Product/Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { products } from "./Shop/products";
import { Basket } from "./Basket/Basket";

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
      <MenuMobile ustawStrone={ustawStrone} />
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
      {strona === "travel" ? <Travel /> : null}
      {strona === "lifestyle" ? <Lifestyle /> : null}
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

        {strona === "contact" ? <Contact /> : null}

        {strona === "shop" ? <Shop ustawStrone={ustawStrone} /> : null}

        {strona === "aboutMe" ? <About /> : null}

        {strona === "product/1" ? <Product product={products[0]} /> : null}

        {strona === "product/2" ? <Product product={products[1]} /> : null}

        {strona === "product/3" ? <Product product={products[2]} /> : null}

        {strona === "basket" ? <Basket /> : null}
      </div>

      {strona === "stronaGlowna" ? <SecondSubPage /> : null}

      <BottomText ustawStrone={ustawStrone} />

      <div className="socialMedia">
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

      <BackToTop />

      <div className="stopka">
        <div className="copyright"></div>
      </div>
    </div>
  );
}

export default App;
