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
                <li>
                  <Link className="nav--link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav--link" to="/about">
                    Information
                  </Link>
                </li>
                <li>
                  <Link className="nav--link" to="/work">
                    Work
                  </Link>
                </li>
                <li>
                  <Link className="nav--link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <div className="inhalt">
          <Switch>
            <Route path="/">
              <Main />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
