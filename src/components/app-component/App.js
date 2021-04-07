import React from "react";
import AboutMe from "../about-me/about-me.components";
import * as SA from "../config/layout.styles";
import Connect from "../connect/Connect.component";
import styles from "../../index.css";

function App() {
  return (
    <SA.GridWrapper>
      <AboutMe />
      <Connect />
    </SA.GridWrapper>
  );
}

export default App;
