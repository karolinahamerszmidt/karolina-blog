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
import heartRed from "../heartRed.png";
import add from "../add.png";
import remove from "../remove.png";
import { faBlackberry } from "@fortawesome/free-brands-svg-icons";

export const Product = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isAddedtoWishListOpen, setAddedtoWishListOpen] = useState(false);
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
          <img
            className="Product__wishListHeart"
            src={isAddedtoWishListOpen ? heartRed : heart}
            onClick={() => setAddedtoWishListOpen(!isAddedtoWishListOpen)}
          />
          <div className="Product__wishListText">Wish list</div>
        </div>
        <div className="Product__description">
          <img
            className="Product__descriptionAdd"
            src={isDescriptionOpen ? remove : add}
            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          />
          <div className="Product__descriptionText">Description</div>
        </div>
        <div className="Product__line" />
        {isDescriptionOpen ? (
          <div className="Product__descriptionTextText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            faucibus diam elit, id pulvinar justo commodo ac. Ut vitae felis
            nulla. Suspendisse ut placerat libero, quis malesuada felis.
          </div>
        ) : null}
      </div>
    </div>
  );
};
