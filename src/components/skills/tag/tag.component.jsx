import React from "react";
import { TagStyle } from "./tag.styled";
const TagComponent = ({ type, label }) => {
  return <TagStyle type={type}>{label}</TagStyle>;
};

export default TagComponent;
