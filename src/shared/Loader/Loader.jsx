import React from "react";
import styled, { keyframes } from "styled-components";

const circle7124 = keyframes`
  0% {
    top: 16px;    // Wrapper의 height와 맞춤
    height: 3px;
    border-radius: 25px 25px 10px 10px;
    transform: scaleX(1.2);
  }
  40% {
    height: 10px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0%;
  }
`;

const shadow046 = keyframes`
  0% {
    transform: scaleX(1.5);
  }
  40% {
    transform: scaleX(1);
    opacity: .7;
  }
  100% {
    transform: scaleX(.2);
    opacity: .4;
  }
`;

const Bubble = styled.div`
  max-width: 70%;
  padding: 10px 15px;
  background-color: ${(props) => (props.type === 0 ? "#4f98ff" : "#f1f0f0")};
  color: ${(props) => (props.type === 0 ? "white" : "black")};
  border-radius: 18px;
  border-bottom-right-radius: ${(props) => (props.type === 0 ? "0" : "18px")};
  border-bottom-left-radius: ${(props) => (props.type === 0 ? "18px" : "0")};
  font-size: 15px;
  font-weight: 400;
  word-break: break-word;
  white-space: pre-wrap;
`;

const Wrapper = styled.div`
width: 20%;
height: 32px;
max-width: 70%;
  padding: 10px 15px;
  background: #f1f0f0;
  border-radius: 18px;
  position: relative;
  z-index: 1;
`;

const Circle = styled.div`
  z-index: 2;
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 50%;
  background-color: #8D8F95;
  left: 15%;
  transform-origin: 50%;
  animation: ${circle7124} .5s alternate infinite ease;
  &:nth-child(2) {
    left: 45%;
    animation-delay: .2s;
  }
  &:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: .3s;
  }
`;

const Shadow = styled.div`
  width: 10px;
  height: 2px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.9);
  position: absolute;
  top: 15px;
  left: 15%;
  z-index: -1;
  filter: blur(1px);
  animation: ${shadow046} .5s alternate infinite ease;

  &:nth-child(4) {
    left: 45%;
    animation-delay: .2s;
  }
  &:nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: .3s;
  }
`;

export default function Loader() {
  return (
    <Wrapper>
      <Circle />
      <Circle />
      <Circle />
      <Shadow />
      <Shadow />
      <Shadow />
    </Wrapper>
  );
}
