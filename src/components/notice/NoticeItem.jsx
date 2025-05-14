import React from "react";
import { useNavigate } from "react-router-dom";
// styles
import * as S from "../../styles/notice/notice.styles";

import PinImg from "../../assets/home/pin.svg";

export default function NoticeItem({ notice }) {
  const navigate = useNavigate();
  return (
    <div>
      <S.NoticeItemContainer onClick={() => navigate(`/notice/${notice.id}`)}>
        {notice.isPined && (
          <S.NoticeItemPined>
            <img src={PinImg} alt="pin" />
          </S.NoticeItemPined>
        )}
        <S.NoticeItemTitle>{notice.title}</S.NoticeItemTitle>
        <S.NoticeItemDate>{notice.date}</S.NoticeItemDate>
      </S.NoticeItemContainer>
    </div>
  );
}
