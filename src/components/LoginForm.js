import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import {attemptLogin} from '../state/actionCreators' 
import { connect } from 'react-redux'



const LoginForm = ({ errors, touched, values, status, history, login, attemptLogin, logout }) => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    attemptLogin(values)

  }
  
  return (
    // Login Form with validation using Yup for Formik //

    <div id="login-form" className="form-container">
      <Form className="form" onSubmit={handleSubmit}>
        <div className='water-logo'></div>
        <label>User Name:</label>
        <Field type="text" name="username" placeholder="User Name" />
        <small>(Between 4-16 characters)</small>
        {touched.username && errors.username && (
          <span className="error">{errors.username}</span>
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
        <NavLink className="form-link" to="/signup">
        Dont have an account?
        </NavLink>
      </Form>
    </div>
    //!!! Login Form with validation using Yup for Formik //
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
  attemptLogin
)(FormikLoginForm);