import React from "react";
import AboutMe from "../about-me/about-me.components";
import * as SA from "../config/layout.styles";

function App() {
  return (
    <SA.GridWrapper>
      <AboutMe />
    </SA.GridWrapper>
  );
}

export default App;
