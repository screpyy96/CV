import React, { useEffect, useState } from "react";
import * as DW from "../Connect.styles";

const DiscConnect = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/connect/")
        ).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);
  console.log(data);

  return (
    <DW.GridWrapper>
      {data &&
        data.socialList &&
        data.socialList.map((item) => {
          return <DW.IconWrapper icon={item.icon} color="white" size="50%" />;
        })}
    </DW.GridWrapper>
  );
};

export default DiscConnect;
