import React, { useState } from "react";
import styled from "styled-components";
import { StatusContainer } from "../../components/Chatbot/StatusContainer";
import { ChatContainer } from "../../components/Chatbot/ChatContainer";

export function Chatbot() {

  const [status, setStatus] = useState(0);

  return (
    <ChatbotWrap>
      <StatusContainer status = {status}/>
      <ChatContainer status = {status} setStatus={setStatus}/>
    </ChatbotWrap>
  )
}

export default Chatbot;


const ChatbotWrap = styled.div`
height: 100vh;
background-color: white;
`