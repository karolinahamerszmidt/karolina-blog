import React from "react";
import "./Lifestyle.css";
import pilates from "../pilates.jpg";
import yoga from "../yoga.jpg";
import workout from "../workout.jpg";
import relax from "../relax.jpg";

export const Lifestyle = () => (
  <div className="Lifestyle">
    <div className="Lifestyle__banerCategory">Category</div>
    <div className="Lifestyle__banerLifestyle">Lifestyle</div>
    <div className="Lifestyle__baner">
      <img className="Lifestyle__banerImage" src={pilates} />
    </div>
    <div className="Lifestyle__post">
      <div className="Lifestyle__posty">
        <img src={workout} />
      </div>
      <div className="Lifestyle__posty">
        <img src={relax} />
      </div>
      <div className="Lifestyle__posty">
        <img src={yoga} />
      </div>
    </div>
  </div>
);
