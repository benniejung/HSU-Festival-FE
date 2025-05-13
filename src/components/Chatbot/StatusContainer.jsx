import React from "react";
import styled from "styled-components";
import normal from '../../assets/Chatbot/부기_평온.png'
import error from '../../assets/Chatbot/부기_난처.png'

export function StatusContainer({ status }) {

    let title = ''
    let image = normal;

    switch (status) {
        case 0:
            title = '궁금하신 점이 있으신가요?<br> 부기에게 물어보세요!'
            image = normal;
            break;
        case 1:
            title = '궁금하신 점이 있으신가요?<br> 부기에게 물어보세요!'
            image = normal;
            break;
        case 2:
            title = '대화에 부적절한<br> 단어가 포함되었어요.'
            image = error;
            break;
        default:
            break;
    }

    return (
        <MainWrap status={status}>
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <Image src={image} alt="status" />
        </MainWrap>
    );
}

export default StatusContainer;

const MainWrap = styled.div`
  position: relative;
  height: 24vh;
  background-color: ${({ status }) => (status === 2 ? '#EA8780' : '#469AF6')};
  display: flex;
`;

const Title = styled.div`
position: absolute;
  top: 24px;
  left: 48px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 3.5%;
  text-align: left;
  color: white;
  font-family: "Gmarket Sans";
  font-style: normal;
`;

const Image = styled.img`
  position: absolute;
  bottom: 20px;
  right: 30px;
  width: 180px;
  height: auto;
`;