import React from "react";
import img_Next_project from "./img_Next_project.png";
import "./Next_project.css";

export default function Next_project() {
  return (
    <div>
      <div class="image_5">
        <img src={img_Next_project} alt="Next_project" className="image__img" />
        <div class="image__overlay">
          <div class="image__description">
            <ul>
              <li>HTML CSS JS</li>
              <li>API</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
