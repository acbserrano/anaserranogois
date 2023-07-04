import React from "react";
import "./LinksList.css";

export default function LinksList() {
  return (
    <div className="links">
      <a
        className="App-link"
        href="https://www.linkedin.com/in/ana-serrano-góis"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="App-link"
        href="https://www.dropbox.com/s/w0s4bqggcgs3h8g/AnaGois_resume.pdf?dl=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        resume
      </a>
      <a
        className="App-link"
        href="https://github.com/acbserrano"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  );
}
