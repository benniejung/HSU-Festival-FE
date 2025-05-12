import styled from "styled-components";
import colors from "../common/colors";

export const CreditsLayout = styled.div`
  width: 100%;
  background: ${colors.nav_bg_gray};
  min-height: 100vh;
  padding: clamp(16px, 5vw, 24px);
`;

export const Title = styled.h2`
<<<<<<< HEAD
  margin-top: 3vh;
  font-size: 16px;
=======
  margin-top: clamp(2vh, 3vh, 4vh);
  font-size: clamp(14px, 2vw, 15px);
>>>>>>> bc0b2f72eb6cad7d9b685a027492d0163e78ab71
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.375px;
  margin-bottom: clamp(24px, 4vh, 32px);
  font-family: Pretendard;
  font-style: normal;
  margin-left: clamp(8px, 2vw, 10px);
`;

export const List = styled.div`
  width: 100%;
  height: calc(100vh - 8vh);
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 4vh, 32px);
  margin-left: clamp(8px, 2vw, 10px);
  overflow-y: auto;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(16px, 3vw, 24px);
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const ProfileImg = styled.img`
  width: clamp(60px, 15vw, 80px);
  height: clamp(60px, 15vw, 80px);
  object-fit: cover;
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  flex: 1;
  min-width: 200px;
`;

export const NameMajor = styled.div`
  display: flex;
  align-items: baseline;
  gap: clamp(8px, 2vw, 12px);
  flex-wrap: wrap;
`;

export const Name = styled.span`
<<<<<<< HEAD
  font-size: 14px;
=======
  font-size: clamp(11px, 1.5vw, 12px);
>>>>>>> bc0b2f72eb6cad7d9b685a027492d0163e78ab71
  font-weight: 700;
`;

export const Major = styled.span`
  font-size: clamp(10px, 1.5vw, 12px);
  color: ${colors.text_light_gray};
<<<<<<< HEAD

  margin-left: 6px;
=======
  margin-left: clamp(4px, 1vw, 8px);
>>>>>>> bc0b2f72eb6cad7d9b685a027492d0163e78ab71
`;

export const Role = styled.div`
  font-family: Pretendard;
<<<<<<< HEAD
  font-size: 12px;
=======
  font-size: clamp(9px, 1.2vw, 10px);
>>>>>>> bc0b2f72eb6cad7d9b685a027492d0163e78ab71
  font-style: normal;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: -0.25px;
  color: ${colors.black};
  margin-top: clamp(6px, 1vh, 8px);
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
<<<<<<< HEAD
  background:rgb(209, 215, 226);
  margin-top: 10px;
=======
  background: #e3eaf6;
  margin-top: clamp(8px, 1vh, 10px);
>>>>>>> bc0b2f72eb6cad7d9b685a027492d0163e78ab71
`;
