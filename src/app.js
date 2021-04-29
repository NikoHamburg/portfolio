import './reset.css';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import Main from './components/main/main';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Work from './components/work/work';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <div className="app">
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/work'>
          <Work />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
      </div>      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
