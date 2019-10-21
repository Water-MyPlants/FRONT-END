import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function WelcomePage() {
  return (
    <WrapperStyle className="wrapper">
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/signup" exact component={SignupForm} />
      </Switch>
    </WrapperStyle>
  );
}
const WrapperStyle = styled.div`
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
    height: 420px;
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
        padding: 2% 0 0 5%;
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
        border: 1px solid black;
        border-radius: 3px;
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
  }
  #login-form {
    height: 325px;
  }
`;
