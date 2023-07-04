import React from "react";
import img_React_project from "./img_React_project.png";
import "./ReactProject.css";

export default function ReactProject() {
  return (
    <div>
      <div class="image_2">
        <img
          src={img_React_project}
          alt="React_Add_On"
          className="image__img"
        />
        <div class="image__overlay">
          <div class="image__description">
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
