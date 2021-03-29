import React from "react";
import {
  BannerInfoFirstColumns,
  BannerInfoSecondColumn,
  ButtonBannerInfo,
  GlobalBannerInfoContainer,
  WrapperBannerInfo,
  EnlaceBotton,
} from "./BannerIndo.elements";

const BannerInfo = (props) => {
  return (
    <>
      <GlobalBannerInfoContainer>
        <WrapperBannerInfo direction={props.direction ? 1 : 0}>
          <BannerInfoFirstColumns>
            <img src={props.logo} alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              aliquid magni minima itaque sint ea iure totam possimus cumque
              architecto!
            </p>
            <ButtonBannerInfo>
              <EnlaceBotton to={props.link}>{props.textButton}</EnlaceBotton>
            </ButtonBannerInfo>
          </BannerInfoFirstColumns>

          <BannerInfoSecondColumn>
            <img src={props.image} alt=' ' />
          </BannerInfoSecondColumn>
        </WrapperBannerInfo>
      </GlobalBannerInfoContainer>
    </>
  );
};

export default BannerInfo;
