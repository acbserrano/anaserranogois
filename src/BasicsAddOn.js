import React from "react";
import img_Basics_Add_On from "./img_Basics_Add_On.png";
import "./BasicsAddOn.css";

export default function BasicsAddOn() {
  return (
    <div>
      <div class="image_3">
        <img
          src={img_Basics_Add_On}
          alt="Basics_Add_On"
          className="image__img"
        />
        <div class="image__overlay">
          <div class="image__description">
            <ul>
              <li>HTML CSS JS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
