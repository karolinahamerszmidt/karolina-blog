import {
  faBars,
  faCross,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";
import "./MenuMobile.css";
export const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((previousIsOpen) => !previousIsOpen);
  };

  return (
    <div className="MenuMobile">
      <div className="MenuMobile__space"></div>
      <div className="MenuMobile__container">
        <div className="MenuMobile__menu">
          <FontAwesomeIcon
            onClick={toggleMenu}
            className="MenuMobile__bars"
            icon={faBars}
          />
          <FontAwesomeIcon className="MenuMobile__search" icon={faSearch} />
        </div>
        <div
          className={classNames({
            MenuMobile__sidebar: true,
            MenuMobile__sidebar_active: isOpen,
          })}
        >
          <FontAwesomeIcon
            onClick={toggleMenu}
            className="MenuMobile__sidebarIcon"
            icon={faTimes}
          />
          <div className="MenuMobile__sidebarCategory">
            <div className="MenuMobile__sidebarCategoryList">Home</div>
            <div className="MenuMobile__sidebarCategoryList">About</div>
            <div className="MenuMobile__sidebarCategoryList">Blog</div>
            <div className="MenuMobile__sidebarCategoryList">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};
