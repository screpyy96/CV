import React from "react";
import Button from "./button.component";
import * as IS from "./infobox.style";
import Cell from "./cell.component";
import Icon from "../../icomoon/IcoMoon.component";

const Infobox = ({ title, description, label, link, close }) => {
  return (
    <IS.StyledWrapper>
      <IS.WrapperHead>
        <IS.StyledTitle>{title}</IS.StyledTitle>
        <Button onClick={close} type="disc" bgCuloare="#1875F0">
          <span style={{ fontSize: "20px" }}></span>
          <Icon size="50%" icon="cross" color="white" />
        </Button>
      </IS.WrapperHead>
      <IS.StyledDescription>{description}</IS.StyledDescription>
      <Cell jc="center">
        <Button type="link" link={link} target="_blank">
          <span className="text">{label}</span>
        </Button>
      </Cell>
    </IS.StyledWrapper>
  );
};

export default Infobox;
