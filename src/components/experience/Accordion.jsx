import React, { useState } from "react";
import Chevron from "./Chevron";
import { images } from "../../constants/images";
import {
  AccordionSubTitle,
  AccordionWrapper,
  AccordionTitle,
  AccordionContainer,
  AccordionButton,
  Dates,
  Logo,
  AccordionText,
} from "./accordion.styled";

const Accordion = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((value) => !value);
  };
  const trimIconPath = (str) => {
    const strArr = str.split("/");
    return strArr[strArr.length - 1].split(".")[0];
  };
  return (
    <AccordionWrapper>
      <div>
        <AccordionButton onClick={toggleAccordion}>
          <Logo icon={images[trimIconPath(item.iconPath)]} />
          <div>
            <AccordionTitle>{item.companyName}</AccordionTitle>
            <AccordionSubTitle>{item.jobTitle}</AccordionSubTitle>
          </div>
          <Chevron isExpanded={isExpanded} />
        </AccordionButton>
      </div>

      <AccordionContainer isExpanded={isExpanded}>
        <Dates>
          {item.startDate}
          {item.endDate}
        </Dates>
        <AccordionText>{item.infoList[0]}</AccordionText>
      </AccordionContainer>
    </AccordionWrapper>
  );
};

export default Accordion;
