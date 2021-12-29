import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import PropTypes from "prop-types";

Auth.propTypes = {
  autoRoute: PropTypes.string,
};

Auth.defaultProps = {
  autoRoute: "login",
};

function Auth(props) {
  const { autoRoute } = props;
  // console.log(props);
  // console.log(autoRoute);

  let body = (
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
