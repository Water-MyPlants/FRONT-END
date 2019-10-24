import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import * as withAuth from "../helpers/axiosWithAuth";
import { Link } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

// Login Form with validation using Yup for Formik //

export const LoginForm = ({
  errors,
  touched,
  values,
  status,
  history,
  attemptLogin,
  logout
}) => {
  const onLogin = e => {
    e.preventDefault();
    attemptLogin(values, history);
  };

  const onLogout = () => {
    logout();
    history.push("/");
  };
  return withAuth.isLoggedIn() ? (
    <button onClick={onLogout}>Logout</button>
  ) : (
    <div id="login-form" className="form-container">
      <Form className="form" onSubmit={onLogin}>
        <div className="water-logo"></div>
        <label>User Name:</label>
        <Field type="text" name="username" placeholder="User Name" />
        <small>(Between 4-16 characters)</small>
        {touched.userName && errors.userName && (
          <span className="error">{errors.userName}</span>
        )}
        <label>Password:</label>
        <Field type="password" name="password" placeholder="Password" />
        <small>(Between 4-16 characters)</small>
        {touched.password && errors.password && (
          <span className="error">{errors.password}</span>
        )}
        <button className="btn" type="submit">
          LOG IN
        </button>
        <Link className="form-link" to="/signup">
          Dont have an account?
        </Link>
      </Form>
    </div>
  );
};

// withFormik validation and Yup Error Messages //
const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, "Need atleast 4 characters")
      .max(16, "No more than 16 characters")
      .required("User Name is required"),
    password: Yup.string()
      .min(4, "Need atleast 4 characters")
      .max(16, "No more than 16 characters")
      .required("Password is required")
  })
})(LoginForm);
//!!! withFormik validation and Yup Error Messages //

//attemptLogin

export default connect(
  state => state,
  actionCreators
)(FormikLoginForm);
