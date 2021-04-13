import React from "react";
import "./Beauty.css";
import beauty from "./beauty.jpg";

export const Beauty = () => (
  <div>
    <div className="Beauty__banerCategory">Category</div>
    <div className="Beauty__banerBeauty">Beauty</div>
    <div className="Beauty__baner">
      <img className="Beauty__banerImage" src={beauty} />
    </div>
  </div>
);
