import React, { useEffect, useState } from "react";
import * as DC from "../Connect.styles";
import Button from "./button.component";
import Infobox from "./infobox.component";
import Cell from "./cell.component";
import Icon from "../../icomoon/IcoMoon.component";

const DiscConnect = () => {
  const [data, setData] = useState({});
  const [selected, updateSelected] = useState(null);

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5010/connect/")
        ).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { socialList = [] } = data;

  const hide = () => updateSelected(null);

  const selectMe = (icon) => {
    updateSelected(socialList.find((a) => a.icon === icon));
  };

  // console.log(iconList(iconSet));
  return (
    <DC.GridWrapper>
      {socialList.map(({ icon }) => {
        return (
          <Button
            key={icon}
            onClick={() => selectMe(icon)}
            size="68px"
            type="disc"
            bgCuloare={icon === selected?.icon ? "#D52027" : "#1875F0"}
          >
            <Icon size="40%" icon={icon} color="white" />
          </Button>
        );
      })}
      {selected && (
        <Cell jc="center">
          <Infobox {...selected} close={hide} />
        </Cell>
      )}
    </DC.GridWrapper>
  );
};

export default DiscConnect;
