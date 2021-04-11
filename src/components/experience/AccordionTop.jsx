import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import "./Accordion.css";

const AccordionTop = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/experience")
        ).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);
  return (
    <div>
      {data?.jobList?.map((item, i) => {
        return (
          <div key={i}>
            <Accordion
              image={item.iconPath}
              title={item.jobTitle}
              subtitle={item.companyName}
              content={item.infoList}
              start={item.startDate}
              end={item.endDate}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AccordionTop;
