import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
