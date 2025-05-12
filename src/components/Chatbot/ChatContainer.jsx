import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ChatBubble from "../../shared/ChatBubble/ChatBubble";
import sendIcon from "../../assets/Chatbot/send_icon.svg";
import usePost from '../../hooks/usePost.jsx'

export function ChatContainer({ status, setStatus }) {
    const [chattings, setChattings] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const chatWrapRef = useRef(null);
    const {post, loading, error} = usePost('/chatMessage')

    const handleSend = async () => {
        if (inputValue.trim() === "") return;

        const newChat = {
            type: 0,
            content: inputValue,
            date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setChattings(prev => [...prev, newChat]);
        setInputValue("");
        try {
            const result = await post({
                newChat: inputValue,
                chatHistory: chattings,
            });
    
            // 정상 응답 처리
            setStatus(0);
    
            const newAIChat = {
                type: 1,
                content: result.data.content,
                date: result.data.date,
            };
    
            setChattings(prev => [...prev, newAIChat]);
    
        } catch (err) {
            console.error("Error while sending message:", err.response.data.code);
            setStatus(2); // 예: 비속어 감지 or 기타 에러 시 상태 코드
    
            // 에러 메시지를 사용자에게 보여주고 싶다면:
            const errorChat = {
                type: 1,
                content: "죄송해요. 대화에 부적절한 단어가 포함되었어요.",
                date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setChattings(prev => [...prev, errorChat]);
        }
        
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
            <ChatWrap ref={chatWrapRef}>
                {chattings.length === 0 ? (
                    <EmptyText>
                        <Main>부기와의 대화를 시작해보세요!</Main>
                        <Sub>부기 챗봇은 대화 내용이나 개인 정보를 저장하지 않습니다</Sub>
                    </EmptyText>
                ) : (
                    chattings.map((e, index) => (
                        <ChatBubble
                            key={index}
                            type={e.type}
                            content={e.content}
                            date={e.date}
                        />
                    ))
                )}
            </ChatWrap>

            <TextInputWrap>
                <TextInput>
                    <Input
                        placeholder="궁금한점을 물어보세요!"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <SendButton onClick={handleSend}>
                        <img src={sendIcon} alt="send" width="20" height="20" />
                    </SendButton>
                </TextInput>
            </TextInputWrap>

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
    justify-content: space-between;
    overflow: hidden;
`;

const ChatWrap = styled.div`
    max-height: 60vh;
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