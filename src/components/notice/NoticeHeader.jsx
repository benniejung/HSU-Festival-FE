import React from "react";
import * as S from "../../styles/notice/notice.styles";
import BackImg from "../../assets/common/back.svg";

export default function NoticeHeader({ title }) {
  return (
    <S.NoticeHeader>
      <S.BackButton onClick={() => window.history.back()}>
        <img src={BackImg} alt="back" />
      </S.BackButton>
      <S.NoticeTitle>{title}</S.NoticeTitle>
    </S.NoticeHeader>
  );
}
