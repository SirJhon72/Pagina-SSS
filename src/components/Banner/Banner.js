import React from "react";
import {
  BannerContainer,
  BannerWrapper,
  BannerLeyend,
} from "./Banner.elements";

const Banner = (props) => {
  return (
    <>
      <BannerContainer>
        <BannerWrapper bgc={props.bgc}>
          <BannerLeyend>
            <h6>{props.header}</h6>
            <h1>{props.title}</h1>
          </BannerLeyend>
        </BannerWrapper>
      </BannerContainer>
    </>
  );
};

export default Banner;
