import React from "react";
<<<<<<< HEAD
import * as ST from "../section-title/sectionTitle.styled";
=======
import * as ST from "./sectionTitle.styled";
>>>>>>> 94210b7a31f59001a2c36d22d9a1398ce2950776

const SectionTitle = ({ title, id }) => (
  <div id={id}>
    <ST.SectionTitleWrapper>
      <ST.MainTitle>{title}</ST.MainTitle>
    </ST.SectionTitleWrapper>
  </div>
);

export default SectionTitle;
