import React from "react";
import styled from "styled-components";
import bubble_user from '../../assets/Chatbot/bubble_user.svg';
import bubble_ai from '../../assets/Chatbot/bubble_ai.svg';
import Loader from "../Loader/Loader";

export function ChatBubble({ type, content, date }) {
  return (
    <MainWrap type={type}>
      {type === 0 ? (
        <>
          <Date>{date}</Date>
          <Bubble type={type}>{content}</Bubble>
        </>
      )  : type === 2 ? (        
        
        
          <Loader />
        
        
      ) : (
        <>
          <Bubble type={type}>{content}</Bubble>
          <Date>{date}</Date>
        </>
      )}
    </MainWrap>
  );
}

export default ChatBubble;

const MainWrap = styled.div`
  display: flex;
  gap: 10px;
  justify-content: ${(props) => (props.type === 0 ? 'flex-end' : 'flex-start')};
align-items: flex-end;
margin-bottom: 30px;

`;

const Date = styled.div`
  font-size: 12px;
  color: gray;
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

const Loading = styled.div`
font-size: 20px;
font-weight: 600;
`