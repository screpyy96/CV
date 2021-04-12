import React from "react";
import { ButtonExpand } from "./open-source.styled";

const Expand = (props) => {
  return (
    <div>
      <ButtonExpand isExpanded={props.isExpanded} />
    </div>
  );
};

export default Expand;
