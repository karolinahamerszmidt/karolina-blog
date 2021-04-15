import React from "react";
import "./Travel.css";
import car from "../car.jpg";
import walizka from "../walizka.jpg";
import travelpack from "../travelpack.jpg";
import hut from "../hut.jpg";

export const Travel = () => (
  <div className="Travel">
    <div className="Travel__banerCategory">Category</div>
    <div className="Travel__banerTravel">Travel</div>
    <div className="Travel__baner">
      <img className="Travel__banerImage" src={car} />
    </div>
    <div className="Travel__post">
      <div className="Travel__posty">
        <img src={travelpack} />
      </div>
      <div className="Travel__posty">
        <img src={hut} />
      </div>
      <div className="Travel__posty">
        <img src={walizka} />
      </div>
    </div>
  </div>
);
