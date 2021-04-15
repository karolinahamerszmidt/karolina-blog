import {
  faAngleLeft,
  faBars,
  faCross,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";
import "./MenuMobile.css";

export const MenuMobile = ({ ustawStrone }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [subMenuOpened, setSubMenuOpened] = useState(undefined);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((previousIsOpen) => !previousIsOpen);
    setSubMenuOpened(undefined);
  };

  const handleClick = (strona) => {
    ustawStrone(strona);
    setIsOpen(false);
    setSubMenuOpened(undefined);
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
          <FontAwesomeIcon
            className="MenuMobile__search"
            icon={faSearch}
            onClick={() => setIsSearchOpen(true)}
          />
          <div
            className={classNames({
              MenuMobile__searchContainer: true,
              MenuMobile__searchContainer_active: isSearchOpen,
            })}
          >
            <input
              className="MenuMobile__searchSearch"
              placeholder="Search..."
            />
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => setIsSearchOpen(false)}
              className="MenuMobile__searchClose"
            />
          </div>
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
            <div
              onClick={() => handleClick("stronaGlowna")}
              className="MenuMobile__sidebarCategoryList"
            >
              Home
            </div>
            <div
              onClick={() => handleClick("aboutMe")}
              className="MenuMobile__sidebarCategoryList"
            >
              About
            </div>
            <div
              className="MenuMobile__sidebarCategoryList"
              onClick={() => setSubMenuOpened("blog")}
            >
              Blog
            </div>
            <div
              onClick={() => handleClick("contact")}
              className="MenuMobile__sidebarCategoryList"
            >
              Contact
            </div>
          </div>
        </div>
        <div
          className={classNames({
            MenuMobile__sidebarSub: true,
            MenuMobile__sidebarSub_active: subMenuOpened !== undefined,
          })}
        >
          <FontAwesomeIcon
            onClick={toggleMenu}
            className="MenuMobile__sidebarSubIcon"
            icon={faTimes}
          />
          <div className="MenuMobile__sidebarSubCategory">
            <div
              onClick={() => setSubMenuOpened(undefined)}
              className="MenuMobile__sidebarCategoryList MenuMobile__sidebarCategoryList_back"
            >
              <FontAwesomeIcon icon={faAngleLeft} />
              Back
            </div>
            <div
              onClick={() => handleClick("beauty")}
              className="MenuMobile__sidebarSubCategoryList"
            >
              Beauty
            </div>
            <div
              onClick={() => handleClick("travel")}
              className="MenuMobile__sidebarSubCategoryList"
            >
              Travel
            </div>
            <div
              onClick={() => handleClick("lifestyle")}
              className="MenuMobile__sidebarSubCategoryList"
            >
              Lifestyle
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
