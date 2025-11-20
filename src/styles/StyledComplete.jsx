import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 393px;
  min-width: 320px;
  flex-shrink: 0;
  overflow: visible;
  align-items: center;
  background: #eef2f7;
  overflow: hidden;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  height: 60px;
  padding: 9px 6px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  align-self: stretch;
  background: #002159;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  color: #fff;
  leading-trim: both;
  text-edge: cap;
  font-family: "Gmarket Sans TTF";
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 89px; /* 342.308% */
`;

export const Icons = styled.div`
  display: flex;
  position: absolute;
  gap: 20px;
  align-items: center;
  left: 10px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex: 1;

  overflow-y: auto;
  padding-bottom: 90px;
  -webkit-overflow-scrolling: touch; /* 모바일 부드러운 스크롤 */

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE, Edge */
`;

export const Component = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  margin-top: 30px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 5.039px 30.233px 50.388px 0 rgba(90, 117, 167, 0.04);
`;

export const C_title = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const C_btn = styled.div`
  display: flex;
  width: 283px;
  height: 64px;
  padding: 15px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: rgba(99, 180, 255, 0.1);
  margin: 10px 0;

  color: #4894fe;
  font-family: "Gmarket Sans TTF";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 24.2px */
`;

export const btn1 = styled.div`
  display: flex;
  width: 153px;
  height: 48px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: rgba(99, 180, 255, 0.1);

  color: #4894fe;
  font-family: "Gmarket Sans TTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 22px */
`;

export const btn2 = styled.div`
  display: flex;
  width: 153px;
  height: 48px;
  padding: 15px 19px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #002159;

  color: #fff;
  font-family: "Gmarket Sans TTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 22px */
`;

export const Info_wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &.check {
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const InfoLeft = styled.div`
  font-family: "Gmarket Sans TTF";
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

export const InfoRight = styled.div`
  font-family: "Gmarket Sans TTF";
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

export const Divider = styled.div`
  width: 249px;
  height: 2px;
  background: rgba(86, 120, 255, 0.5);
  margin: 10px 0;
`;

export const Nav = styled.div`
  display: flex;
  width: 393px;
  height: 65px;
  padding: 10px 43px;
  flex-direction: row;
  gap: 10px;
  background: #fff;
  justify-content: space-between;
  align-items: end;
  position: fixed;
  bottom: 0;
  margin-left: 0;
  z-index: 1000; /* 다른 요소 위에 보이도록 */
`;

export const Comp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  img {
    width: 29px;
    height: 29px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }

  div {
    color: #002159;
    font-family: "Gmarket Sans TTF";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
  }
`;
