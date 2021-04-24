import React from "react";

import { BoxWrapper, Description, Date } from "./proud";

const ProudEntry = ({ item }) => {
  return (
    <BoxWrapper>
      <Date>{item.date}</Date>
      <Description>{item.content}</Description>
    </BoxWrapper>
  );
};

export default ProudEntry;
