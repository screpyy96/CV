import React from "react";
import * as YT from "./Youtube.styled";
import Icon from "../icomoon/IcoMoon.component";

const YoutubeButton = () => {
  return (
    <YT.YoutubeButton>
      <Icon size="60%" icon="youtube" color="white" />
    </YT.YoutubeButton>
  );
};

export default YoutubeButton;
