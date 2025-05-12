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
  height: 100%;

  object-fit: cover;
  display: block;

  @media (max-width: 390px) {
    height: calc(229px * (100vw / 390));
  }
`;

export const MainContentContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: ${colors.white};
  transition: all 0.3s ease-in-out;

  ${({ $isFixed }) =>
    $isFixed &&
    `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    height: 100vh;
    overflow-y: auto;
  `}
`;

export const ChatbotButton = styled.button`
  position: fixed;
  bottom: calc(8vh + 16px); // 바텀 네비게이션 높이(8vh) + 여백
  right: 16px;
  width: 60px;
  height: 60px;

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
  gap: 1.6vh;
  align-items: center;
`;

export const DateSelector = styled.div`
  width: 57%;
  height: 42px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const DayText = styled.p`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;

export const ScheduleContainer = styled.div`
  width: 100%;
  height: 22vh;
  background-color: ${colors.bg_gray_light};
  display: flex;
  align-items: center;
  justify-content: center;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet-active {
    background: ${colors.primary_base};
  }
`;

export const ScheduleItem = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8vh;
`;

export const ScheduleStatus = styled.div`
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 500;
  width: 82px;
  height: 82px;
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
  font-size: 11px;

  font-weight: 400;
  color: ${colors.text_primary};
`;

export const ScheduleTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 13px;

  font-weight: 600;
  color: ${colors.text_primary};
`;

export const LoadingText = styled.div`
  text-align: center;
  color: ${colors.text_secondary};
  margin-top: 20px;
`;

// InfoCard.jsx
export const InfoCardBox = styled.button`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $clicked }) =>
    $clicked ? colors.primary_base : colors.bg_gray_light};
`;

export const InfoImg = styled.img`
  height: auto;
`;

export const InfoTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  color: ${({ $clicked }) => ($clicked ? colors.white : colors.text_secondary)};
`;

// Modal.jsx
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 55%;
  background: ${colors.white};
`;

export const ModalContent = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ModalP = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

export const ModalTime = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalP2 = styled.p`
  white-space: pre-line;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 40%;
  background-color: red;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
