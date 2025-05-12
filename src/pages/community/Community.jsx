import React, { useState } from "react";
import styled from "styled-components";
import ChatContainer from "../../components/Community/ChatContainer";
import floatingBtnImg from '../../assets/Community/btn_floating_community.svg';
import send from '../../assets/Chatbot/send_icon.svg'
import pen from '../../assets/Community/Pen.svg'

const MAX_LENGTH = 62; // 최대 글자수

export function Community() {
  const [chattings, setChattings] = useState([
    {
      type: 1,
      content: 'Random Text Random Text Random Text Random Textㅇㄴ머ㅣㅏㅇㄴㅇ미ㅓㅣㅁㄴ', date: '오후 3:31분'
    },
    {
      type: 1,
      content: 'Random Text Random Text Random Text Random Textㅇㄴ머ㅣㅏㅇㄴㅇ미ㅓㅣㅁㄴ', date: '오후 3:31분'
    },
    {
      type: 1,
      content: 'Random Text Random Text Random Text Random Textㅇㄴ머ㅣㅏㅇㄴㅇ미ㅓㅣㅁㄴ', date: '오후 3:31분'
    },
    {
      type: 1,
      content: 'Random Text Random Text Random Text Random Textㅇㄴ머ㅣㅏㅇㄴㅇ미ㅓㅣㅁㄴ', date: '오후 3:31분'
    },
    {
      type: 1,
      content: 'Random Text Random Text Random Text Random Textㅇㄴ머ㅣㅏㅇㄴㅇ미ㅓㅣㅁㄴ', date: '오후 3:31분'
    },
    {
      type: 1,
      content: 'Random Text Random Text Random Text Random Textㅇㄴ머ㅣㅏㅇㄴㅇ미ㅓㅣㅁㄴ', date: '오후 3:31분'
    },
    {
      type: 1,
      content: 'Random Text Random Text Random Text Random Textㅇㄴ머ㅣㅏㅇㄴㅇ미ㅓㅣㅁㄴ', date: '오후 3:31분'
    },
    {
      type: 1,
      content: 'Random Text Random Text Random Text Random Textㅇㄴ머ㅣㅏㅇㄴㅇ미ㅓㅣㅁㄴ', date: '오후 3:31분'
    },
    {
      type: 1,
      content: 'Random Text Random Text Random Text Random Textㅇㄴ머ㅣㅏㅇㄴㅇ미ㅓㅣㅁㄴ', date: '오후 3:31분'
    },
    {
      type: 1,
      content: 'Random Text Random Text Random Text Random Textㅇㄴ머ㅣㅏㅇㄴㅇ미ㅓㅣㅁㄴ', date: '오후 3:31분'
    },
    {
      type: 1,
      content: 'Random Text Random Text Random Text Random Textㅇㄴ머ㅣㅏㅇㄴㅇ미ㅓㅣㅁㄴ', date: '오후 3:31분'
    },
    {
      type: 1,
      content: 'Random Text Random Text Random Text Random Textㅇㄴ머ㅣㅏㅇㄴㅇ미ㅓㅣㅁㄴ', date: '오후 3:31분'
    },
    {
      type: 0,
      content: 'Random Text Random Text Random Text Random Textㅇㄴ머ㅣㅏㅇㄴㅇ미ㅓㅣㅁㄴ', date: '오후 3:31분'
    },

  ]);


  const [isClicked, setIsClicked] = useState(false);

  // 닉네임 인라인 수정용 state
  const [nickname, setNickname] = useState("익명부기");
  const [isEditing, setIsEditing] = useState(false);

  const [text, setText] = useState(""); // TextInput 값

  const handleFloatingBtnClick = () => setIsClicked(prev => !prev);

  // 닉네임 인라인 수정 이벤트
  const handleStartEdit = () => setIsEditing(true);
  const handleChangeNickname = e => setNickname(e.target.value);
  const handleBlur = () => setIsEditing(false);
  const handleKeyDown = e => {
    if (e.key === 'Enter') setIsEditing(false);
  };

  const isOver = text.length > MAX_LENGTH;

  const handleSend = () => {
    // 현재 시간 구하기 ("오후 3:44분" 이런 식)
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    const displayHour = ((hours + 11) % 12 + 1); // 12시간 포맷
    const displayMinute = minutes < 10 ? '0' + minutes : minutes;
    const dateStr = `${ampm} ${displayHour}:${displayMinute}분`;

    setChattings(prev => [
      ...prev,
      {
        type: 0,
        nickname, // 추가: 닉네임도 저장하려면
        content: text,
        date: dateStr
      }
    ]);

    setIsClicked(false);
    setText("");
  };


  return (
    <MainLayout>
      <ChatContainer chattings={chattings} setChattings={setChattings} />
      {isClicked && (
        <>
          <DimOverlay onClick={handleFloatingBtnClick} />
          <BubbleCenterWrap>
            <ChatBubbleWrap>
              {/* 텍스트 입력 */}
              <TextInput
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="메시지를 입력하세요..."
                maxLength={150} // 완전 차단이 필요하다면 MAX_LENGTH로 바꿔도 OK
              />

              {/* 닉네임 인라인 에디터 */}
              <Wrap>
                <NickNameWrap>
                  <ImageWrap>
                    <Image src={pen} alt="pen" />
                  </ImageWrap>
                  {isEditing ? (
                    <NickNameInput
                      value={nickname}
                      autoFocus
                      onChange={handleChangeNickname}
                      onBlur={handleBlur}
                      onKeyDown={handleKeyDown}
                    />
                  ) : (
                    <NickNameText onClick={handleStartEdit}>{nickname}</NickNameText>
                  )}
                </NickNameWrap>

                <SendImageWrap onClick={() => {
                  if (!isOver && text.trim() !== "") handleSend();
                }}>
                  <SendImage src={send} alt="send" />
                </SendImageWrap>

              </Wrap>

            </ChatBubbleWrap>
            {/* 최대 글자수 초과 경고 메시지 */}
            {isOver && (
              <WarningMsg>최대 글자수를 초과하였습니다</WarningMsg>
            )}
          </BubbleCenterWrap>

        </>
      )}
      <FloatingBtnWrap>
        <FloatingBtn
          src={floatingBtnImg}
          alt="floating button"
          onClick={handleFloatingBtnClick}
        />
      </FloatingBtnWrap>
    </MainLayout>
  );
}

export default Community;

// === 스타일링 ===
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

