import React from "react";
import { ChevronWrapper, CssTrick } from "./accordion.styled";

function Chevron(props) {
  console.log(props.isExpanded);
  return (
    <ChevronWrapper>
      <CssTrick isExpanded={props.isExpanded} />
    </ChevronWrapper>
  );
}

export default Chevron;
