import React from "react";
import img_Responsive_Add_On from "./img_Responsive_Add_On.png";
import "./Responsive_Add_On.css";

export default function Responsive_Add_On() {
  return (
    <div>
      <div class="image_4">
        <img
          src={img_Responsive_Add_On}
          alt="Responsive_Add_On"
          className="image__img"
        />
        <div class="image__overlay">
          <div class="image__title">React</div>
          <div class="image__description">Bootstrap</div>
        </div>
      </div>
    </div>
  );
}
