import React from "react";
import "./BackToTop.css";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BackToTop = () => (
  <div
    className="BackToTop"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <div className="BacktoTop__arrow">
      <FontAwesomeIcon icon={faAngleUp} />
    </div>
    <div className="BacktoTop_text">Back to top</div>
  </div>
);
