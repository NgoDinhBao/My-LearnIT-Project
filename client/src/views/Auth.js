import PropTypes from "prop-types";
import { useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Redirect } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { AuthContext } from "../contexts/AuthContext";


Auth.propTypes = {
  autoRoute: PropTypes.string,
};

Auth.defaultProps = {
  autoRoute: "login",
};

function Auth(props) {
  const { autoRoute } = props;

  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  
  let body;
  if (authLoading)
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  else if (isAuthenticated) return <Redirect to="/dashboard" />;
  else
    body = (
      <>
        {autoRoute === "login" && <LoginForm />}
        {autoRoute === "register" && <RegisterForm />}
      </>
    );
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1> Learn IT</h1>
          <h4>Keep track of what you are learning</h4>
          {body}
        </div>
      </div>
    </div>
  );
}

export default Auth;
