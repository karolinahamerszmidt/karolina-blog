import React, { useState } from "react";
import "./Product.css";
import earrings from "../earrings.jpg";
import earrings_one from "../earrings_one.jpg";
import earrings_three from "../earrings_three.jpg";
import earrings_four from "../earrings_four.jpg";
import earrings_five from "../earrings_five.jpg";
import earrings_six from "../earrings_six.jpg";
import earrings_seven from "../earrings_seven.jpg";
import { Carousel } from "react-responsive-carousel";
import heart from "../heart.png";
import add from "../add.png";
import { faBlackberry } from "@fortawesome/free-brands-svg-icons";

export const Product = () => {
  return (
    <div className="Product">
      <div className="Product__left">
        <Carousel className="Product__carousel" showThumbs={false}>
          <div className="Product__img">
            <img src={earrings} />
          </div>
          <div className="Product__img">
            <img src={earrings_one} />
          </div>
          <div className="Product__img">
            <img src={earrings_seven} />
          </div>
          <div className="Product__img">
            <img src={earrings_three} />
          </div>
          <div className="Product__img">
            <img src={earrings_four} />
          </div>
          <div className="Product__img">
            <img src={earrings_five} />
          </div>
          <div className="Product__img">
            <img src={earrings_six} />
          </div>
        </Carousel>
      </div>
      <div className="Product__right">
        {" "}
        <div className="Product__title">Silver earring Mara</div>
        <div className="Product__price">20 euro</div>
        <button className="Product__button">Add to cart</button>
        <div className="Product__wishList">
          <img className="Product__wishListHeart" src={heart} />
          <div className="Product__wishListText">Wish list</div>
        </div>
        <div className="Product__description">
          <img className="Product__descriptionAdd" src={add} />
          <div className="Product__descriptionText">Description</div>
        </div>
        <div className="Product__line" />
      </div>
    </div>
  );
};
