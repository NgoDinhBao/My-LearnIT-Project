import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/Landing";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import AuthContextProvider from "./contexts/AuthContext";
import PostContextProvider from "./contexts/PostContext";
import Auth from "./views/Auth";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => <Landing {...props} />}
            />
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
            <ProtectedRoute
              exact
              path="/dashboard"
              component={(props) => <Dashboard {...props} />}
            />
          </Switch>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
