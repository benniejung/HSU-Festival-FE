import styled from "styled-components";
import colors from "../../styles/common/colors";

export const HomeLayout = styled.div`
  width: 100%;
`;

export const FestivalMainBanner = styled.div`
  width: 100%;
  height: auto;
`;

export const FestivalMainBannerImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 229px;
  object-fit: cover;
  display: block;

  @media (max-width: 390px) {
    height: calc(229px * (100vw / 390));
  }
`;

export const MainContentContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const ChatbotButton = styled.button`
  position: fixed;
  bottom: calc(8vh + 16px); // 바텀 네비게이션 높이(8vh) + 여백
  right: 16px;
  width: 7.5rem;
  height: 7.5rem;

  cursor: pointer;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  // 최대 너비 420px 내에서만 표시되도록 설정
  @media screen and (min-width: 420px) {
    right: calc((100vw - 420px) / 2 + 16px);
  }
`;

export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 2.7vh;
`;

// TimeTable.jsx
export const TimeTableLayout = styled.div`
  width: 100%;
  min-height: 28.22vh; // 최소 높이 보장
  /* height: calc(
    100vh - 8vh - 4vw
  ); // 전체 높이에서 바텀 네비(8vh)와 패딩(2vw * 2) 제외
  max-height: calc(100vh - 8vh - 4vw); */
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const DateSelector = styled.div`
  width: 57%;
  height: 6vh;
  padding: 4px;
  border-radius: 38px;
  border: 1px solid #ececec;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateButton = styled.button`
  flex: 1;
  width: 33%;
  height: 100%;
  background-color: ${({ $isSelected }) =>
    $isSelected ? colors.primary_base : colors.white};
  color: ${({ $isSelected }) =>
    $isSelected ? colors.white : colors.text_secondary};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? colors.primary_base : colors.bg_gray_light};
  }
`;

export const DateText = styled.p`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
`;

export const DayText = styled.p`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
`;

export const ScheduleContainer = styled.div`
  width: 100%;
  height: 22vh;
  background-color: ${colors.bg_gray_light};
  display: flex;
`;

export const ScheduleItem = styled.div`
  width: 33.5%;
  height: 100%;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ScheduleStatus = styled.div`
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 50%;
  font-size: 1.8rem;
  font-weight: 500;
  width: 10rem;
  height: 10rem;
  align-items: center;
  justify-content: center;

  ${({ $status }) => {
    switch ($status) {
      case "진행 중":
        return `
          background-color: ${colors.primary_base};
          color: white;
        `;
      case "완료":
        return `
          background-color: ${colors.bg_gray};
          color: ${colors.text_secondary};
        `;
      case "대기 중":
        return `
          background-color: white;
          color: ${colors.text_secondary};
          border: 1px solid ${colors.bg_gray};
        `;
      default:
        return "";
    }
  }}
`;

export const ScheduleTime = styled.div`
  font-size: 1.7rem;
  font-weight: 400;
  color: ${colors.text_primary};
`;

export const ScheduleTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.text_primary};
`;

export const LoadingText = styled.div`
  text-align: center;
  color: ${colors.text_secondary};
  margin-top: 20px;
`;

// InfoCard.jsx
export const InfoCardBox = styled.div`
  width: 100%;
  height: 8vh;
  background-color: ${colors.bg_gray_light};
  display: flex;
  gap: 1vw;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #eaeaea;
`;

export const InfoImg = styled.img`
  height: auto;
`;

export const InfoTitle = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  color: ${colors.text_secondary};
`;
