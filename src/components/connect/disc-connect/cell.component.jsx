import React from "react";
import { StyledCell } from "../Connect.styles";

const Cell = ({ children, jc, span, height }) => {
  return (
    <StyledCell height={height} jc={jc} span={span}>
      {children}
    </StyledCell>
  );
};

export default Cell;
