import React from "react";
import styled, { keyframes } from "styled-components";
import colors from "../../styles/common/colors";

// 애니메이션 정의
const bounce = keyframes`
  from {
    transform: scale(1.6);
  }
  to {
    transform: scale(1);
  }
`;

// 스타일 정의
const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 0.5s linear;
`;

const Ball = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${colors.text_gray};
  animation: ${bounce} 1s alternate infinite;
  transition: 0.5s linear;

  &:nth-child(2) {
    animation-delay: 0.25s;
  }
  &:nth-child(3) {
    animation-delay: 0.5s;
  }
`;

// 컴포넌트
export default function Loader() {
  return (
    <LoaderWrapper>
      <Ball />
      <Ball />
      <Ball />
    </LoaderWrapper>
  );
}
