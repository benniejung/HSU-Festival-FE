import styled from "styled-components";
import colors from "../common/colors";

export const BoothLayout = styled.div`
  width: 100%;
`;

export const BoothMap = styled.div`
  width: 100%;
  aspect-ratio: 390 / 244; // 피그마 기준
  position: relative;
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
  width: 3.2rem;
  height: 3.2em;
`;

export const MarkerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.3rem;
  font-weight: 800;
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
  justify-content: center;
  gap: 1.6rem;
`;

export const CategoryListContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const CategoryItem = styled.div`
  display: flex;
  width: 80px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid ${({ selected }) => (selected ? null : colors.border_gray)};
  background: ${({ selected }) =>
    selected ? colors.primary_base : colors.white};
  color: ${({ selected }) => (selected ? colors.white : colors.text_gray)};
  font-size: 1.4rem;
  font-weight: 500;
  font-family: Pretendard;
`;

export const BoothListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 0 1.6rem;
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
