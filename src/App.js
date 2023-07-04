import "./App.css";

import ReactAddOn from "./ReactAddOn";
import ReactProject from "./ReactProject";
import BasicsAddOn from "./BasicsAddOn";
import ResponsiveAddOn from "./ResponsiveAddOn";
import NextProject from "./NextProject";
import ResponsiveProject from "./ResponsiveProject";
import LinksList from "./LinksList";

function App() {
  return (
    <div className="App-background">
      <div className="container">
        <div className="App">
          <LinksList />
          <div className="App-header">
            <h1>Ana Serrano Góis</h1>
            <h2>front-end developer</h2>

            <p>
              architect/photographer with experience in building refurbishment,
              interior design, architectural photography and graphic design{" "}
              <br />
              looking for an opportunity to work and explore web development
              <br />
              very happy when swimming, reading, paiting and traveling
              <br />
              founder of{" "}
              <span className="name_sites">
                <a
                  href="https://www.estudiocabo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  estudio cabo
                </a>
                <a
                  href="https://www.graoagrao.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  grão a grão
                </a>
                <a
                  href="https://www.serranogois.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  serrano góis
                </a>
              </span>
            </p>
          </div>
          <div className="row">
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
