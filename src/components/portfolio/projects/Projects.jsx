import React, { useState, useEffect } from "react";
import { LeadTitle } from "../../skills/skills.styled";
import { CardWrapper, Logo, Title, Content } from "./projects.styled";
import { Buttons, ButtonExpand } from "../../open-source/open-source.styled";
import { images } from "../../../constants/images";
import Icon from "../../icomoon/IcoMoon.component";

const Projects = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/portfolio")
        ).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);

  const trimIconPath = (str) => {
    const strArr = str.split("/");
    return strArr[strArr.length - 1].split(".")[0];
  };

  return (
    <div>
      <LeadTitle>{data.header}</LeadTitle>
      {data?.card1?.map((i) => {
        return (
          <>
            <CardWrapper>
              <Title>{i.title}</Title>
              <Content>{i.skills}</Content>
              <Content>{i.link}</Content>
              <Logo image={images[trimIconPath(i.image)]} />
            </CardWrapper>
            <Buttons>
              <ButtonExpand href={i.link} target="_blank">
                <Icon icon={i.icon1} color="white" size="20" />
              </ButtonExpand>
              <ButtonExpand href={i.linkIcon} target="_blank">
                <Icon icon={i.icon2} color="white" size="20" />
              </ButtonExpand>
            </Buttons>
          </>
        );
      })}
      <LeadTitle>{data?.card2?.titleOld}</LeadTitle>
      {data?.card2?.data.map((j) => {
        return (
          <div>
            <CardWrapper>
              <Title>{j.title}</Title>
              <Content>{j.skills}</Content>
              <Content>{j.link}</Content>
              <Logo image={images[trimIconPath(j.image)]} />
            </CardWrapper>
            <Buttons>
              <ButtonExpand href={j.link} target="_blank">
                <Icon icon={j.icon1} color="white" size="20" />
              </ButtonExpand>
              <ButtonExpand href={j.linkIcon} target="_blank">
                <Icon icon={j.icon2} color="white" size="20" />
              </ButtonExpand>
            </Buttons>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
