import React, { useContext } from "react";
import "./Basket.css";
import { BasketContext } from "./BasketContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  );
};
