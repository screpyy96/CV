import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "../../assets/selection.json";

const Icon = ({ color, size, icon, className }) => {
  return (
    <IcomoonReact
      iconSet={iconSet}
      className={className}
      icon={icon}
      size={size}
      color={color}
    />
  );
};

export default Icon;
