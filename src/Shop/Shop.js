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
        <div className="Shop__productTitle">Ring</div>
        <div className="Shop__productPrice">25 euro</div>
      </div>
      <div className="Shop__product">
        <div className="Shop__productImage">
          <img src={necklace} />
          <img src={necklace_model} />
        </div>
        <div className="Shop__productTitle">Necklace</div>
        <div className="Shop__productPrice">35 euro</div>
      </div>
      <div className="Shop__product">
        <div className="Shop__productImage">
          <img src={earrings} />
          <img src={earrings_model} />
        </div>
        <div className="Shop__productTitle">Earrings</div>
        <div className="Shop__productPrice">20 euro</div>
      </div>
    </div>
  </div>
);
