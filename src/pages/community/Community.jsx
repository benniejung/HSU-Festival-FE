import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import ChatContainer from "../../components/Community/ChatContainer";
import floatingBtnImg from '../../assets/Community/btn_floating_community.svg';
import send from '../../assets/Chatbot/send_icon.svg';
import pen from '../../assets/Community/Pen.svg';
import SockJS from 'sockjs-client/dist/sockjs.js';
import { Client } from '@stomp/stompjs';

const MAX_LENGTH = 62;

export function Community() {
  const clientRef = useRef(null);
  const [chattings, setChattings] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [nickname, setNickname] = useState("익명부기");
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");

  const getOrSetUserId = () => {
      let id = localStorage.getItem("user_id");
      
      if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("user_id", id);
        console.log("✅ user_id 생성됨:", id);
      } else {
        console.log("✅ user_id 존재:", id);
      }
      return id;
    };


  const userId = getOrSetUserId();

  const handleFloatingBtnClick = () => setIsClicked(prev => !prev);

  const handleStartEdit = () => setIsEditing(true);
  const handleChangeNickname = e => setNickname(e.target.value);
  const handleBlur = () => setIsEditing(false);
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // **form의 submit 기본 동작 방지!**
      if (!isOver && text.trim() !== "") handleSend();
    }
  };


  const isOver = text.length > MAX_LENGTH;

  const handleSend = () => {
    if (!text.trim()) return;

    const payload = {
      username: nickname,
      content: text,
      userId: userId 
    };

    clientRef.current?.publish({
      destination: "/pub/chat.send",
      body: JSON.stringify(payload)
    });

    setText("");
    setIsClicked(false);
  };

  function connect() {
    const socket = new SockJS(`https://3.34.22.86.nip.io/ws/community?user_id=${userId}`);
    const client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
    });

    clientRef.current = client;

    client.onConnect = () => {
      console.log("✅ WebSocket 연결됨");

      client.subscribe("/sub/chat/public", message => {
        const msg = JSON.parse(message.body);
        msg.isMine = msg.senderId === userId;
        setChattings(prev => [...prev, { type: msg.isMine ? 0 : 1, content: msg.content, time: '00:00' }]);
      });

      client.subscribe("/user/queue/errors", message => {
        try {
          const error = JSON.parse(message.body);
          alert(`⚠️ ${error.message || '알 수 없는 오류 발생'}`);
        } catch (e) {
          console.error("에러 메시지 파싱 실패:", message.body);
        }
      });

      fetch(`https://3.34.22.86.nip.io/api/community/chat/messages?user_id=${userId}`, {
        credentials: "include"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const reversed = data.reverse().map(msg => ({ type: msg.senderId === userId ? 0 : 1, content: msg.content, username: msg.username, time: msg.time}));
          setChattings(reversed);
        });
    };

    client.onStompError = frame => {
      console.error("WebSocket 연결 실패:", frame);
    };

    client.activate();
  }

  useEffect(() => {
    connect();
  }, []);

  return (
    <MainLayout>
      <ChatContainer chattings={chattings} setChattings={setChattings} />
      {isClicked && (
        <>
          <DimOverlay onClick={handleFloatingBtnClick} />
          <BubbleCenterWrap>
            <ChatBubbleWrap>
              <TextInput
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="메시지를 입력하세요..."
                maxLength={150}
                onKeyDown={handleInputKeyDown}
              />
              <Wrap>
                <NickNameWrap>
                  <ImageWrap><Image src={pen} alt="pen" /></ImageWrap>
                  {isEditing ? (
                    <NickNameInput
                      value={nickname}
                      autoFocus
                      onChange={handleChangeNickname}
                      onBlur={handleBlur}
                      onKeyDown={handleInputKeyDown}
                    />
                  ) : (
                    <NickNameText onClick={handleStartEdit}>{nickname}</NickNameText>
                  )}
                </NickNameWrap>
                <SendImageWrap onClick={handleSend}>
                  <SendImage src={send} alt="send" />
                </SendImageWrap>
              </Wrap>
            </ChatBubbleWrap>
            {isOver && <WarningMsg>최대 글자수를 초과하였습니다</WarningMsg>}
          </BubbleCenterWrap>
        </>
      )}
      <FloatingBtnWrap>
        <FloatingBtn src={floatingBtnImg} alt="floating button" onClick={handleFloatingBtnClick} />
      </FloatingBtnWrap>
    </MainLayout>
  );
}

export default Community;



const MainLayout = styled.div`position: relative;`;

const FloatingBtnWrap = styled.div`
  position: fixed;
  right: 24px;
  bottom: 104px;
  z-index: 101;
`;

const FloatingBtn = styled.img`cursor: pointer;`;

const DimOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const BubbleCenterWrap = styled.div`
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: 102;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChatBubbleWrap = styled.div`
  width: 304px;
  min-height: 100px;
  padding: 18px 16px 18px 16px;
  background-color: white;
  border-radius: 30px 30px 30px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

const TextInput = styled.input`
  width: 100%;
  font-size: 17px;
  margin-bottom: 12px;
  border: 0px solid #ddd;
  border-radius: 6px;
  outline: none;
  font-weight:500;
`;

const NickNameWrap = styled.div`
  display: flex;
  align-items:end;
`;

const NickNameText = styled.span`
  font-weight: bold;
  color: #b7b7b7;
  cursor: pointer;
  font-size: 10px;
  padding: 0px 6px;
  border-radius: 6px;

  &:hover {
    background: #f0f0f0;
  }
`;

const NickNameInput = styled.input`
  font-weight: bold;
  font-size: 10px;
  padding: 0px 6px;
  border-radius: 6px;
  color: #b7b7b7;
  outline: none;
`;

const ImageWrap = styled.div``

const Image = styled.img``

const SendImageWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color:#469AF6;
border-radius: 50%;
padding: 7px;
`

const SendImage = styled.img``

const WarningMsg = styled.div`
  color: #ff1339;
  font-size: 12px;
  margin-top: 6px;
  font-weight: 500;
`;

const Wrap = styled.div`
display: flex;
justify-content:space-between;
`

