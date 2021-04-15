import React, { useState, useEffect } from "react";

import ProjectsEntry from "../ProjectsEntry";
import { LeadTitle } from "../open-source.styled";

const AccordionSection = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/open-source")
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
      <LeadTitle>{data?.projects?.projectName}</LeadTitle>
      {data?.projects?.project.map((item) => {
        return (
          <>
            <ProjectsEntry project={item} />
          </>
        );
      })}
    </div>
  );
};

export default AccordionSection;
