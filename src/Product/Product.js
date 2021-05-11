import React, { useState } from "react";
import "./Product.css";
import { Carousel } from "react-responsive-carousel";
import heart from "../heart.png";
import heartRed from "../heartRed.png";
import add from "../add.png";
import remove from "../remove.png";

export const Product = ({ product }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isAddedtoWishListOpen, setAddedtoWishListOpen] = useState(false);
  return (
    <div className="Product">
      <div className="Product__left">
        <Carousel className="Product__carousel" showThumbs={false}>
          {product.images.map((image, index) => (
            <div key={index} className="Product__img">
              <img src={image} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="Product__right">
        {" "}
        <div className="Product__title">{product.name}</div>
        <div className="Product__price">{product.price} euro</div>
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
            {product.description}
          </div>
        ) : null}
      </div>
    </div>
  );
};
