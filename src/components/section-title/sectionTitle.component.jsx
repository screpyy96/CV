import React from "react";
import * as ST from "../section-title/sectionTitle.styled";

const SectionTitle = ({ title, id }) => (
  <div id={id}>
    <ST.SectionTitleWrapper>
      <ST.MainTitle>{title}</ST.MainTitle>
    </ST.SectionTitleWrapper>
  </div>
);

export default SectionTitle;
