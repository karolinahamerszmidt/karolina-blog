import React from "react";
import "./BottomText.css";

export const BottomText = ({ ustawStrone }) => {
  return (
    <div className="BottomText">
      <div className="BottomText__KolumnaL">
        <div className="BottomText__sayHello"> Say hello</div>
        <div className="BottomText__Email">karolina@hamerszmidt.eu</div>
      </div>
      <div className="BottomText__KolumnaS">MASCHCRISP</div>
      <div className="BottomText__KolumnP">
        <div
          className="BottomText__KolumnP__Text"
          onClick={() => ustawStrone("stronaGlowna")}
        >
          Home
        </div>
        <div
          className="BottomText__KolumnP__Text"
          onClick={() => ustawStrone("aboutMe")}
        >
          About
        </div>
        <div
          className="BottomText__KolumnP__Text"
          onClick={() => ustawStrone("aboutMe")}
        >
          Blog
        </div>
      </div>
    </div>
  );
};
