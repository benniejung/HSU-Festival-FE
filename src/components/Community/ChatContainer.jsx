import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ChatBubble from "../../shared/ChatBubble/ChatBubbleForCommunity";
import sendIcon from "../../assets/Chatbot/send_icon.svg";

export function ChatContainer({ status, setStatus, chattings, setChattings }) {
    const [inputValue, setInputValue] = useState("");
    const chatWrapRef = useRef(null);

    const handleSend = () => {
        if (inputValue.trim() === "") return;

        const newChat = {
            type: 0,
            content: inputValue,
            date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setChattings([...chattings, newChat]);
        setInputValue("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    useEffect(() => {
        if (chatWrapRef.current) {
            chatWrapRef.current.scrollTo({
                top: chatWrapRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [chattings]);

    return (
        <MainWrap>
            <Title>커뮤니티</Title>
            <ChatWrap ref={chatWrapRef}>
                {chattings.length === 0 ? (
                    <EmptyText>
                        <Main>커뮤니티</Main>
                        <Sub>커뮤니티페이지입니다.</Sub>
                    </EmptyText>
                ) : (
                    
                        chattings.slice().reverse().map((e, index) => (
                            <ChatBubble
                                key={index}
                                type={e.type}
                                content={e.content}
                                date={e.date}
                            />
                        ))
                    

                )}
            </ChatWrap>
        </MainWrap>
    );
}

export default ChatContainer;

const MainWrap = styled.div`

    position: relative;
    top: -25px;
  border-radius: 30px 30px 0px 0px;
  padding: 38px 28px;
  background-color: white;
  display: flex;
  flex-direction: column;
//   justify-content: space-between;
  overflow: hidden;
`;

const ChatWrap = styled.div`

    max-height: 100vh;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const EmptyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 20vh;
`;

const Main = styled.div`
  font-weight: 600;
  font-size: 17px;
  line-height: 140%;
  text-align: center;
`;

const Sub = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 160%;
  text-align: center;
  margin-top: 8px;
`;

const TextInputWrap = styled.div`
  width: 100%;
  position: fixed;
  left: 0px;
  bottom: 100px;
  padding: 0 8vw;
`

const TextInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  border-radius: 50px;
  padding: 12px 20px;
  background-color: white;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: #333;
  background-color: transparent;

  &::placeholder {
    color: #bdbdbd;
  }
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #4f98ff;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Title = styled.div`
// font-family: Pretendard;
font-weight: 700;
font-size: 30px;
line-height: 140%;
letter-spacing: -2.5%;
margin-top: 24px;
margin-bottom: 22px;
`