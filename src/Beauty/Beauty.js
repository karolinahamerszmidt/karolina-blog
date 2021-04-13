import React from "react";
import "./Beauty.css";
import beauty from "./beauty.jpg";
import roza from "./roza.jpg";
import blawatek from "./blawatek.jpg";
import tulipan from "./tulipan.jpg";

export const Beauty = () => (
  <div>
    <div className="Beauty__banerCategory">Category</div>
    <div className="Beauty__banerBeauty">Beauty</div>
    <div className="Beauty__baner">
      <img className="Beauty__banerImage" src={beauty} />
    </div>
    <div className="Beauty__post">
      <div className="Beauty__posty">
        <img src={roza} />
      </div>
      <div className="Beauty__posty">
        <img src={blawatek} />
      </div>
      <div className="Beauty__posty">
        <img src={tulipan} />
      </div>
    </div>
  </div>
);
