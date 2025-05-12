import styled from "styled-components";
import colors from "../common/colors";
export const CreditsLayout = styled.div`
  width: 100%;
  background: ${colors.nav_bg_gray};
  min-height: 100vh;
  padding: 24px;
`;

export const Title = styled.h2`
  margin-top: 3vh;
  font-size: 15px;
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
  gap: 24px;
  position: relative;
`;

export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
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
  font-size: 12px;
  font-weight: 700;
`;

export const Major = styled.span`
  font-size: 12px;
  color: ${colors.text_light_gray};

  margin-left: 8px;
`;

export const Role = styled.div`
  font-family: Pretendard;
  font-size: 10px;
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
  background: #e3eaf6;
  margin-top: 10px;
`;
