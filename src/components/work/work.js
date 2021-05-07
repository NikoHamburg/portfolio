import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./work.css";
import Project1 from "./projects/project1/project1";
import Project2 from "./projects/project2/project2";
import Project3 from "./projects/project3/project3";

function Work() {
  return (
    <>
      <div className="border-gradient"></div>
      <Router>
        <div className="work">
          <div className="projects">
            <h1>.projects</h1>
            <div className="nav-projects">
              <ul>
                <Link to="/projects/project1">
                  <li>Project1</li>
                </Link>
                <Link to="/projects/project2">
                  <li>Project2</li>
                </Link>
                <Link to="/projects/project3">
                  <li>Project3</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="content">
            <Switch>
              <Route path="/projects/project1/">
                <Project1 />
              </Route>
              <Route path="/projects/project2/">
                <Project2 />
              </Route>
              <Route path="/projects/project3/">
                <Project3 />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      <div className="border-gradient"></div>
    </>
  );
}

export default Work;
