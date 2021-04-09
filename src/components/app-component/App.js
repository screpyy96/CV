import React from "react";
import AboutMe from "../about-me/about-me.components";
import * as SA from "../config/layout.styles";
import Connect from "../connect/Connect.component";
import Skills from "../skills/skills.component";

function App() {
  return (
    <SA.GridWrapper>
      <AboutMe />
      <Connect />
      <Skills />
    </SA.GridWrapper>
  );
}

export default App;
