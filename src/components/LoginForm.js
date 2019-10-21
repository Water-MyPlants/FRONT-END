import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginForm = ({ errors, touched, values, status }) => {
  return (
    // Login Form with validation using Yup for Formik //

    <div id="login-form" className="form-container">
      <Form className="form">
        <label>User Name:</label>
        <Field type="text" name="userName" placeholder="User Name" />
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
      </Form>
      <Link className="form-link" to="/signup">
        Dont have an account?
      </Link>
    </div>
    //!!! Login Form with validation using Yup for Formik //
  );
};

// withFormik validation and Yup Error Messages //
const FormikLoginForm = withFormik({
  mapPropsToValues({ userName, password }) {
    return {
      userName: userName || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    userName: Yup.string()
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
export default FormikLoginForm;
