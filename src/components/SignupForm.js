import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

const SignupForm = ({
  errors,
  touched,
  // userData,
  values,
  status,
  userSignUpRequest,

}) => {
  const handleSubmit= (e) => {

    e.preventDefault();
    userSignUpRequest(values);
  }
 
  return (
    // SIGN UP Form with validation using Yup for Formik //

    <div className="form-container">
      <Form className="form" onSubmit={handleSubmit} >
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
        <label>Mobile Phone #:</label>
        <Field type="text" name="phoneNumber" placeholder="Mobile Phone #" />
        {touched.phone && errors.phone && (
          <span className="error">{errors.phone}</span>
        )}

        <button className="btn" type="submit">
          SIGN UP
        </button>
      </Form>
      <Link className="form-link" to="/login">
        Already have an account?
      </Link>
    </div>
    //!!! SIGN UP Form with validation using Yup for Formik //
  );
};

//phone number Regex Validation
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
//!!!phone number Regex Validation

// withFormik validation and Yup Error Messages //
const FormikSignupForm = withFormik({
  mapPropsToValues({ username, phoneNumber, password }) { 
    return {
      username: username || "",
      phoneNumber: phoneNumber || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    userName: Yup.string()
      .min(4, "Need atleast 4 characters")
      .max(16, "No more than 16 characters")
      .required("User Name is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Please enter a valid Phone Number"),
    password: Yup.string()
      .min(4, "Need atleast 4 characters")
      .max(16, "No more than 16 characters")
      .required("Password is required")
  })
})(SignupForm);
//!!! withFormik validation and Yup Error Messages //

export default connect(
  state => state,
  actionCreators
)(FormikSignupForm);
