import styled from "styled-components";
import colors from "../common/colors";
export const CreditsLayout = styled.div`
  width: 100%;
  background: ${colors.nav_bg_gray};
  min-height: 100vh;
  padding: 24px;
`;

export const Title = styled.h2`
  margin-top: clamp(2.5vh, 3vh, 4vh);
  font-size: clamp(16px, 2vw, 18px);
  font-weight: 500;
  line-height: 16px; /* 106.667% */
  letter-spacing: -0.375px;
  margin-bottom: 32px;
  font-family: Pretendard;
  font-style: normal;
  margin-left: 10px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-left: 10px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  position: relative;
`;

export const ProfileImg = styled.img`
  width: 88px;
  height: 88px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
`;

export const NameMajor = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

export const Name = styled.span`
  font-size: clamp(14px, 1.5vw, 15px);
  font-weight: 700;
`;

export const Major = styled.span`
  font-size: 12px;
  color: ${colors.text_light_gray};
  margin-left: clamp(4px, 1vw, 8px);
`;

export const Role = styled.div`
  font-family: Pretendard;
  font-size: clamp(12px, 1.2vw, 14px);
  font-style: normal;
  font-weight: 300;
  line-height: 16px; /* 160% */
  letter-spacing: -0.25px;
  color: ${colors.black};
  margin-top: 8px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background:rgb(209, 215, 226);
  margin-top: clamp(10px, 1vh, 12px);
`;
