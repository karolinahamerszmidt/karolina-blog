import React from "react";
import { Post } from "../Post/Post";
import "./Posty.css";
import notatki from "../notatki_small.jpg";
import girl from "../girl_small.jpg";
import ubrania from "../ubrania_small.jpg";

export const Posty = ({ ustawStrone }) => (
  <div className="Posty">
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
);
