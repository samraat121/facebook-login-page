import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from './Menu';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
