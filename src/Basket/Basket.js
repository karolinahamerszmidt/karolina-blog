import React, { useContext } from "react";
import "./Basket.css";
import { BasketContext } from "./BasketContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getBasketPrice = (basket) => {
  let price = 0;
  for (let index = 0; index < basket.length; index++) {
    const product = basket[index];
    price = price + product.price;
  }
  return price;
};

export const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext);
  const handleRemove = (id) => {
    setBasket((previouseBasket) =>
      previouseBasket.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="Basket">
      <div className="Basket__title">Basket</div>
      <div className="Basket__wrapper">
        <div className="Basket__products">
          {basket.map((product) => (
            <div className="Basket__product" key={product.id}>
              <div className="Basket__productLeft">
                <img className="Basket__productImage" src={product.images[0]} />
              </div>
              <div className="Basket__productRight">
                <div className="Basket__productName">{product.name}</div>
                <div className="Basket__productPrice">{product.price}</div>
              </div>
              <div>
                <div
                  className="Basket__productRemove"
                  onClick={() => handleRemove(product.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="Basket__summary">
          <div className="Basket__summaryOrderTitle">Order Summary</div>
          <div className="Basket__summaryOrder">
            <div className="Basket__summaryOrderLineOne">
              <div className="Basket__summaryOrderValue">Order value</div>
              <div className="Basket__summaryOrderPrice">
                {getBasketPrice(basket)}
              </div>
            </div>
            <div>
              <div className="Basket__summaryOrderShipping">Shipping</div>
              <div className="Basket__summaryOrderAddDiscountCode">
                Add discount code
              </div>
            </div>
          </div>
          <div className="Basket__line"></div>
          <div className="Basket__summaryButton">Continoue to checkout</div>
        </div>
      </div>
    </div>
  );
};
