import React from "react";
import * as ST from "../section-title/SectionTitle.styled";

const SectionTitle = ({ title }) => (
  <div>
    <ST.SectionTitleWrapper>
      <ST.MainTitle>{title}</ST.MainTitle>
    </ST.SectionTitleWrapper>
  </div>
);

export default SectionTitle;
