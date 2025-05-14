import styled from "styled-components";
import colors from "../../styles/common/colors";
import { keyframes } from "styled-components";

// 깜빡이는 애니메이션 (보였다 안 보였다)
const sparkle = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

export const HomeLayout = styled.div`
  width: 100%;
  position: relative; // 상대 위치 기준점
`;

export const FestivalMainBanner = styled.div`
  width: 100%;
  height: auto;
  position: relative; // sparkles가 이 기준으로 겹쳐짐
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

export const FestivalMainBannerSparkles = styled.img`
  position: absolute;
  top: -12px; // 위로 10px 이동
  left: -12px; // 왼쪽으로 12px 이동
  width: 73%;
  pointer-events: none; // 클릭 방해하지 않게
  animation: ${sparkle} 3s infinite ease-in-out;
`;

export const MainContentContainer = styled.div`
  width: 100%;
  margin-top: -10px; // 위쪽 바깥 여백 줄이기
  padding: 23px;
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

// 위아래로 떠다니는 애니메이션 정의
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
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

  animation: ${float} 2.5s ease-in-out infinite;

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

// 공지확인하러가기, 사이트정보 포함
export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 2vh;
`;

// TimeTable.jsx
export const TimeTableLayout = styled.div`
  width: 100%;
  min-height: 30vh; // 최소 높이 보장
  /* height: calc(
    100vh - 8vh - 4vw
  ); // 전체 높이에서 바텀 네비(8vh)와 패딩(2vw * 2) 제외
  max-height: calc(100vh - 8vh - 4vw); */
  display: flex;
  flex-direction: column;
  gap: 3vh;
  align-items: center;
`;

// 요일 바
export const DateSelector = styled.div`
  width: 66%;
  height: 42px;
  padding: 3px;
  border-radius: 38px;
  border: 1px solid #ececec;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
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

// 타임테이블 컨테이너
export const ScheduleContainer = styled.div`
  width: 100%;
  height: 23vh;
  border-radius: 10px;

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
    align-items: flex-start;
    justify-content: center;
    padding-top: 24px;
  }

  .swiper-pagination-bullet-active {
    background: ${colors.primary_base};
  }
`;

// 타임테이블 안에 요소들
export const ScheduleItem = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start; // 위에서부터 시작
  min-height: 18vh; // 항목 간 높이 통일
  align-items: center;
  gap: 0.9vh;
`;

// 타임테이블 상세보기 아이콘
export const IconHint = styled.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 22px;
  height: 22px;

  img {
    width: 80%;
    height: 100%;
    object-fit: contain;
    pointer-events: none; // 아이콘 자체는 클릭 방해 안 하게
  }
`;

export const ScheduleStatus = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: #555;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:active {
    background-color: #469af6;
    color: white;
    transform: scale(0.96);
  }

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
  white-space: pre-line;

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
  border-radius: 10px;
  background-color: ${({ $clicked }) =>
    $clicked ? colors.primary_base : colors.bg_gray_light};
`;

export const InfoImg = styled.img`
  // height: auto;
  height: 26px;
  object-fit: contain; // 이미지 비율 유지
  margin-right: 4px; // 텍스트와 간격
`;

export const InfoTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  color: ${({ $clicked }) => ($clicked ? colors.white : colors.text_secondary)};
`;

// Modal.jsx
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 999;

  animation: fadeInOverlay 0.2s ease-out forwards;

  @keyframes fadeInOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.96);
  width: 85%;
  max-width: 420px;
  background: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 70vh;
  display: flex;
  flex-direction: column;

  animation: fadeInModal 0.25s ease-out forwards;

  @keyframes fadeInModal {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const ModalContent = styled.div`
  padding: 24px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  overflow-y: auto;
  flex: 1;

  min-height: 0;
  max-height: calc(90vh - 30vh - 48px);

  @media (max-height: 600px) {
    max-height: calc(90vh - 25vh - 48px);
  }
`;

export const ModalImgContainer = styled.div`
  width: 100%;
  height: 54vh;
  aspect-ratio: 4 / 3;
  border-radius: 20px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ModalImg = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
`;

export const ModalP = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${colors.text_strong};
  text-align: center;
  line-height: 1.4;
`;

export const ModalTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  p {
    font-size: 14px;
    color: ${colors.text_gray};
  }
`;

export const ModalP2 = styled.p`
  text-align: center;
  white-space: pre-line;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.6;
  color: ${colors.text_default};
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;
  font-size: 22px;
  color: ${colors.gray};
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;
  z-index: 1001;

  &:hover {
    color: ${colors.primary_base};
    transform: rotate(90deg) scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;
