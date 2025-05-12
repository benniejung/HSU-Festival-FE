import React from "react";
import styled from "styled-components";
import bugiImg from '../../assets/Community/bugi_profile.svg'

export function ChatBubbleForCommunity({ type, content, date , username,}) {
  return (
    <MainWrap type={type}>
      {type === 1 ? (
        <>
          <BugiImgWrap><BugiImg src={bugiImg} /></BugiImgWrap>
          <Bubble type={type}>
            <Content>
              {content}
            </Content>
            <ChatInfo>

              <UserName>
                {username}
              </UserName>

              <Time>
                {date}
              </Time>
              
            </ChatInfo>
            

          </Bubble>
        </>
      ) : (
        <>
          <Date>{date}</Date>
          <Bubble type={type}>{content}</Bubble>
        </>
      )}
    </MainWrap>
  );
}

export default ChatBubbleForCommunity;

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

const BugiImgWrap = styled.div`
  
`;

const BugiImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
`

const ChatInfo = styled.div`
display: flex;
gap: 10px;
font-size: 12px;
color: #5E5E5E;
margin-top: 12px;
`

const UserName = styled.div`

`

const Time = styled.div`

`