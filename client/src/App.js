import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={(props) => <Landing {...props} />} />
        <Route
          exact
          path="/login"
          render={(props) => <Auth {...props} autoRoute="login" />}
        />
        <Route
          exact
          path="/register"
          render={(props) => <Auth {...props} autoRoute="register" />}
        />
      </Switch>
    </Router>
  );
}

export default App;
