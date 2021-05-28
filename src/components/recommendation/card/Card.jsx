import React, { useState, useEffect } from "react";
import {
  Avatar,
  CardWrapper,
  Description,
  RecommendationImage,
  Name,
  Position,
} from "./card.styled";
import { images } from "../../../constants/images";

const Card = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5010/recommendations")
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
      {data?.recommendations1?.map((i) => {
        return (
          <div>
            <CardWrapper>
              <RecommendationImage>
                <Avatar image={images[trimIconPath(i.avatarUrl)]} />
              </RecommendationImage>
              <Name>{i.name}</Name>
              <Position>{i.position}</Position>
            </CardWrapper>
            <Description>{i.description}</Description>
          </div>
        );
      })}
      {data?.recommendations2?.map((i) => {
        return (
          <div>
            <CardWrapper>
              <RecommendationImage>
                <Avatar image={images[trimIconPath(i.avatarUrl)]} />
              </RecommendationImage>
              <Name>{i.name}</Name>
              <Position>{i.position}</Position>
            </CardWrapper>
            <Description>{i.description}</Description>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
