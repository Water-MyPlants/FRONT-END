import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import WelcomePage from "./components/WelcomePage";
import background from "./assets/background.jpeg";

function App() {
  return (
    <AppStyle className="App">
      <GlobalStyle />
      <WelcomePage />
    </AppStyle>
  );
}

export default App;
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
}
*:focus {
    outline: none;
}
html {
  font-size: 62.5%;
}
body {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Permanent Marker', cursive;
  }
`;
const AppStyle = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;
