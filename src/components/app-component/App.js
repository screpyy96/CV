import React from "react";
import AboutMe from "../about-me/about-me.components";
import * as SA from "../config/layout.styles";
import Connect from "../connect/Connect.component";
import Experience from "../experience/experience";
import Skills from "../skills/skills.component";
import OpenSource from "../open-source/open-source";
import Portfolio from "../portfolio/Portfolio";
import Recommendation from "../recommendation/Recommendation";

function App() {
  return (
    <SA.GridWrapper>
      <AboutMe />
      <Connect />
      <Skills />
      <Experience />
      <OpenSource />
      <Portfolio />
      <Recommendation />
    </SA.GridWrapper>
  );
}

export default App;
