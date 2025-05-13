import styled from "styled-components";
import colors from "../common/colors";
import { keyframes } from "styled-components";

//  radiate (커졌다 작아졌다)
const radiate = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.25);
    opacity: 1.0;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.7;
  }
`;

// search icon
export const IconHint = styled.div`
  position: absolute;
  right: -2px;   // 우측에서 2px
  width: 22px;
  top: 2px;
  height: 22px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none; // 아이콘 클릭 방해 X
  }
`;


export const FestivalBoothBanner = styled.div`
  width: 100%;
  height: auto;
  position: relative; // glow가 이 기준으로 겹쳐짐
`;

export const FestivalBoothBannerImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  @media (max-width: 390px) {
    height: calc(229px * (100vw / 390));
  }
`;

export const BoothBannerZoomIcon = styled.img`
  position: absolute;
  top: 0.6%;
  right: 20%;
  width: 80%;
  pointer-events: none;
  animation: ${radiate} 2.5s ease-in-out infinite;
  z-index: 5;
`;

export const BoothLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BoothMap = styled.div`
  width: 100%;
  aspect-ratio: 390 / 244; // 피그마 기준
  position: relative;
  flex-shrink: 0;
`;

export const BoothMapImage = styled.img`
  width: 100%;
  height: 110%;
  display: block;
`;

// Marker.jsx
export const MarkerWrapper = styled.div`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
`;

export const MarkerImg = styled.img`
  width: 25px;
  height: 25px;
`;

export const MarkerText = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8px;
  font-weight: 900;
  font-family: Pretendard;
  color: ${colors.white};
  text-align: center;
`;

// BoothCategoryView.jsx
export const BoothCategoryViewLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;
  flex: 1;
  overflow: hidden;
  padding-bottom: 20px;
  height: calc(
    100vh - 244px - 8vh
  ); // 지도 높이(244px)와 하단 네비게이션(8vh) 제외
`;

export const CategoryListContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  padding: 0.8rem 0.8rem 0.5rem 0; // top, right, bottom, left
  width: 100%;
  justify-content: center;
  background: ${colors.white};
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const CategoryItem = styled.div`
  flex: 1;
  max-width: 27%;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid
    ${({ selected }) => (selected ? "transparent" : colors.border_gray)};
  background: ${({ selected }) =>
    selected ? colors.primary_base : colors.white};
  color: ${({ selected }) => (selected ? colors.white : colors.text_gray)};
  font-size: 1.8rem;
  font-weight: 500;
  font-family: Pretendard;
  white-space: nowrap; // 줄바꿈 방지
  text-align: center;
`;

export const BoothListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding: 0 1.6rem;
  overflow-y: auto;
  flex: 1;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 8vh; // 하단 네비게이션 바 높이만큼 패딩 추가
`;

export const BoothItem = styled.div`
  width: 100%;
  padding: 1.6rem;
  border: 1px solid ${colors.border_gray};
  border-radius: 1.2rem;
  background: ${colors.white};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-self: stretch;
`;

// BoothItem.jsx
export const BoothItemRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem;
  border: 1px solid ${colors.border_gray};
  border-radius: 1.2rem;
  background: ${({ selected }) => (selected ? colors.bg_purple : colors.white)};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  gap: 1.6rem;
`;
export const BoothName = styled.div`
  font-size: 1.8rem;
  margin-top: 0.4rem;
  color: ${colors.text_black};
  font-family: Pretendard;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

export const BoothTextCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  gap: 0.4rem;
`;

export const BoothTimeRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
`;

export const BoothLabel = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.text_gray};
`;

export const BoothDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${colors.text_gray};
  margin: 0;
  // 줄바꿈 방지(길어지면 ...표시)
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;

export const BoothImageBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoothImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
