import React from "react";
import img_Responsive_project from "./img_Responsive_project.png";
import "./Responsive_project.css";

export default function Responsive_project() {
  return (
    <div>
      <div class="image_6">
        <img
          src={img_Responsive_project}
          alt="Responsive_project"
          className="image__img"
        />
        <div class="image__overlay">
          <div class="image__description">
            <ul>
              <li>HTML CSS</li>
              <li>Bootstrap</li>
              <li>Flexbox</li>
              <li>SEO</li>
              <li>Responsive</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
