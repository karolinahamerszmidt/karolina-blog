import React from "react";
import "./Shop.css";
import ring from "../ring.jpg";
import ring_model from "../ring_model.jpg";
import necklace from "../necklace.jpg";
import necklace_model from "../necklace_model.jpg";
import earrings from "../earrings.jpg";
import earrings_model from "../earrings_model.jpg";

export const Shop = () => (
  <div className="Shop">
    <div className="Shop__title">Products</div>

    <div className="Shop__products">
      <div className="Shop__product">
        <div className="Shop__productImage">
          <img src={ring} />
          <img src={ring_model} />
        </div>
      </div>
      <div className="Shop__product">
        <div className="Shop__productImage">
          <img src={necklace} />
          <img src={necklace_model} />
        </div>
      </div>
      <div className="Shop__product">
        <div className="Shop__productImage">
          <img src={earrings} />
          <img src={earrings_model} />
        </div>
      </div>
    </div>
  </div>
);
