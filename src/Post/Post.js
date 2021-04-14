import React from "react";
import "./Post.css";

export const Post = ({ tytul, data, zdjecie, onClick }) => (
  <div onClick={onClick} className="Post">
    <div className="Post__image">
      <img src={zdjecie} className="Post__imageOne" />
    </div>
    <div className="Post__tytul">{tytul}</div>
    <div className="Post__data"> {data}</div>
  </div>
);
