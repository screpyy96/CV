import React from "react";
import { ReviewWrapper, Date } from "./review.styled";
import { images } from "../../../constants/images";
import {
  Avatar,
  Name,
  Description,
  RecommendationImage,
} from "../../recommendation/card/card.styled";

const ReviewCard = ({ item }) => {
  const trimIconPath = (str) => {
    const strArr = str.split("/");
    return strArr[strArr.length - 1].split(".")[0];
  };
  return (
    <>
      <ReviewWrapper>
        <RecommendationImage>
          <Avatar image={images[trimIconPath(item.avatarUrl)]} />
        </RecommendationImage>
        <Name>{item.name}</Name>
        <Date>{item.date}</Date>
      </ReviewWrapper>
      <Description>{item.description}</Description>
    </>
  );
};

export default ReviewCard;
