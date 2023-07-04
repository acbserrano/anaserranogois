import "./App.css";

import ReactAddOn from "./ReactAddOn";
import ReactProject from "./ReactProject";
import BasicsAddOn from "./BasicsAddOn";
import ResponsiveAddOn from "./ResponsiveAddOn";
import NextProject from "./NextProject";
import ResponsiveProject from "./ResponsiveProject";

function App() {
  return (
    <div className="App-background">
      <div className="container">
        <div className="App">
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
          <div className="App-header">
            <h1>Ana Serrano Góis</h1>
            <h2>front-end developer</h2>
          </div>

          <div className="row section">
            <div className="project_1 col-lg-4">
              <ReactAddOn />
            </div>
            <div className="project_2 col-lg-4">
              <ReactProject />
            </div>
            <div className="project_3 col-lg-4">
              <BasicsAddOn />
            </div>
          </div>
          <div className="row ">
            <div className="project_4 col-lg-4">
              <ResponsiveAddOn />
            </div>
            <div className="project_5 col-lg-4">
              <NextProject />
            </div>
            <div className="project_6 col-lg-4">
              <ResponsiveProject />
            </div>
          </div>
          <footer>
            <a
              href="https://github.com/acbserrano/anaserranogois"
              target="_blank"
              rel="noreferrer"
            >
              Coded by Ana Góis
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
