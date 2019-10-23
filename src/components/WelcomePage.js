import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import PlantList from "./PlantList";
import background from "../assets/background.jpeg";

export default function WelcomePage() {
  return (
    <WrapperStyle className="wrapper">
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/signup" exact component={SignupForm} />
        <Route path="/plants" exact component={PlantList} />
      </Switch>
    </WrapperStyle>
  );
}
const WrapperStyle = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
  }
  .form-container {
    display: flex;
    flex-direction: column;
    background: white;
    opacity: 0.6;
    width: 360px;
    max-width: 60%;
    border-radius: 12px;
    margin: 5% 5% 0;
    @media (max-width: 768px) {
      max-width: 100%;
      margin: 3% 3% 0;
    }
    .form {
      display: flex;
      flex-direction: column;
      label {
        font-size: 2.2rem;
        padding: 2% 0 1% 5%;
      }
      small {
        font-size: 1.3rem;
        margin: 1% 0 0 5%;
      }
      input {
        margin-left: 5%;
        padding-left: 2%;
        width: 90%;
        height: 30px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid black;
      }
      .btn {
        border: 1px solid black;
        border-radius: 2px;
        margin: 5% auto;
        width: 50%;
      }
      .error {
        margin-left: 5%;
        font-size: 1.4rem;
        color: red;
      }
    }
    .form-link {
      font-size: 1.4rem;
      margin: 0 auto;
    }
    .water-logo{
      display: flex;
      justify-content: center;
      img {
        max-width: 50%;
        margin: 5% auto;
      }
    }
  }
  #login-form {
    height: 60%;
  }
  #signup-form {
    height: 70%;
  }
`;
