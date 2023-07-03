import "./App.css";

import React_Add_On from "./React_Add_On";
import React_project from "./React_project";
import Basics_Add_On from "./Basics_Add_On";
import Responsive_Add_On from "./Responsive_Add_On";
import Next_project from "./Next_project";
import Responsive_project from "./Responsive_project";

function App() {
  return (
    <div className="App-background">
      <div className="container">
        <div className="App">
          <div className="App-header">
            <h1>Ana Serrano Góis</h1>
            <h2>front-end developer</h2>
          </div>

          <div className="row ">
            <div className="project_1 col-lg-4">
              <React_Add_On />
            </div>
            <div className="project_2 col-lg-4">
              <React_project />
            </div>
            <div className="project_3 col-lg-4">
              <Basics_Add_On />
            </div>
          </div>
          <div className="row ">
            <div className="project_4 col-lg-4">
              <Responsive_Add_On />
            </div>
            <div className="project_5 col-lg-4">
              <Next_project />
            </div>
            <div className="project_6 col-lg-4">
              <Responsive_project />
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default App;
