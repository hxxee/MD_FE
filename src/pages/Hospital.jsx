import React from "react";
import * as H from "../styles/StyledHospital";
import { useNavigate } from "react-router-dom";

const Hospital = () => {
  const navigate = useNavigate();

  return (
    <H.Container>
      <H.Header>
        <H.Icons>
          <img id="back" src={`${process.env.PUBLIC_URL}/images/back.svg`} alt="back" onClick={() => navigate("/MainPage")} />
        </H.Icons>
        <H.Title>병원선택</H.Title>
      </H.Header>

      <H.Content>
        <H.Component>
          <H.C_title>경북대학교병원</H.C_title>
          <H.C_sub>정형외과</H.C_sub>
          <H.C_wrapper>
            <H.C_inform>
              <img id="clock" src={`${process.env.PUBLIC_URL}/images/clock.svg`} alt="back" />
              9월 20일
            </H.C_inform>
            <H.C_inform>
              <img id="clock" src={`${process.env.PUBLIC_URL}/images/Calendar.svg`} alt="back" />
              10:00 - 12:00 AM
            </H.C_inform>
          </H.C_wrapper>
          <H.Divider />
          <H.C_btn id="btn">예약하기</H.C_btn>
        </H.Component>

        <H.Component>
          <H.C_title>경북대학교병원</H.C_title>
          <H.C_sub>정형외과</H.C_sub>
          <H.C_wrapper>
            <H.C_inform>
              <img id="clock" src={`${process.env.PUBLIC_URL}/images/clock.svg`} alt="back" />
              9월 20일
            </H.C_inform>
            <H.C_inform>
              <img id="clock" src={`${process.env.PUBLIC_URL}/images/Calendar.svg`} alt="back" />
              10:00 - 12:00 AM
            </H.C_inform>
          </H.C_wrapper>
          <H.Divider />
          <H.C_btn id="btn">예약하기</H.C_btn>
        </H.Component>
      </H.Content>
    </H.Container>
  );
};

export default Hospital;
