import React from "react";
import img_React_Add_On from "./img_React_Add_On.png";
import "./ReactAddOn.css";

export default function ReactAddOn() {
  return (
    <div>
      <div className="image_1">
        <img src={img_React_Add_On} alt="React_Add_On" className="image__img" />
        <div className="image__overlay">
          <div className="image__description">
            <ul>
              <li>React</li>
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
