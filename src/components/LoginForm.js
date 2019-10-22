import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import * as withAuth from "../helpers/axiosWithAuth";
import { Link } from "react-router-dom";

export const LoginForm = ({
  history,
  login,
  onLoginInputChange,
  attemptLogin,
  logout
}) => {
  const onLogin = e => {
    e.preventDefault();
    if (login.username.length === 0 || login.password.length === 0)
      return false;
    attemptLogin(login);
    history.push("/plants");
  };
  const onInputChange = e => {
    onLoginInputChange(e.target);
  };
  const onLogout = () => {
    logout();
    history.push("/");
  };
  return withAuth.isLoggedIn() ? (
    <button onClick={onLogout}>Logout</button>
  ) : (
    <div id="login-form" className="form-container">
      <form className="form" onSubmit={onLogin}>
        <label name="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={login.username}
          onChange={onInputChange}
        />
        <label name="password">Password </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={login.password}
          onChange={onInputChange}
        />
        <button className="btn" type="submit">
          LOG IN
        </button>
      </form>
      <Link className="form-link" to="/signup">
        Dont have an account?
      </Link>
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(LoginForm);
