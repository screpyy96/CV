import React from "react";
import { ChevronWrapper, CssTrick } from "./accordion.styled";

function Chevron(props) {
  return (
    <ChevronWrapper>
      <CssTrick isExpanded={props.isExpanded} />
    </ChevronWrapper>
  );
}

export default Chevron;
