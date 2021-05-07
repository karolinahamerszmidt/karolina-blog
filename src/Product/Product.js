import React, { useState } from "react";
import "./Product.css";
import earrings from "../earrings.jpg";
import earrings_one from "../earrings_one.jpg";
import earrings_three from "../earrings_three.jpg";
import earrings_four from "../earrings_four.jpg";
import earrings_five from "../earrings_five.jpg";
import earrings_six from "../earrings_six.jpg";
import earrings_seven from "../earrings_seven.jpg";

export const Product = () => {
  const [selectedImage, setSelectedImage] = useState(earrings);
  return (
    <div className="Product">
      <div className="Product__left">
        <div className="Product__image">
          <img src={selectedImage} />
        </div>
        <div className="Product__thumbNails">
          <div
            className="Product__thumbNail"
            onClick={() => setSelectedImage(earrings)}
          >
            <img src={earrings} />
          </div>
          <div
            className="Product__thumbNail"
            onClick={() => setSelectedImage(earrings_one)}
          >
            <img src={earrings_one} />
          </div>
          <div
            className="Product__thumbNail"
            onClick={() => setSelectedImage(earrings_seven)}
          >
            <img src={earrings_seven} />
          </div>
          <div
            className="Product__thumbNail"
            onClick={() => setSelectedImage(earrings_three)}
          >
            <img src={earrings_three} />
          </div>
          <div
            className="Product__thumbNail"
            onClick={() => setSelectedImage(earrings_four)}
          >
            <img src={earrings_four} />
          </div>
          <div
            className="Product__thumbNail"
            onClick={() => setSelectedImage(earrings_five)}
          >
            <img src={earrings_five} />
          </div>
          <div
            className="Product__thumbNail"
            onClick={() => setSelectedImage(earrings_six)}
          >
            <img src={earrings_six} />
          </div>
        </div>
      </div>
      <div className="Product__right"></div>
    </div>
  );
};
