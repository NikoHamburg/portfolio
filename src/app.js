import "./reset.css";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Header from "./components/header/header";
import Main from "./components/main/main";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Work from "./components/work/work";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <aside>
        <div className="menu">
          <div className="wrapper">
              <ul>
                <Link className="nav--link" to="/">
                  <li>Home</li>
                </Link>
                <Link className="nav--link" to="/about">
                  <li>Information</li>
                </Link>
                <Link className="nav--link" to="/work">
                  <li>Work</li>
                </Link>
                <Link className="nav--link" to="/contact">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </aside>
        <div className="inhalt">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
