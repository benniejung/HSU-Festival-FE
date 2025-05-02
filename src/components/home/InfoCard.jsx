import React from "react";
import * as S from "../../styles/home/home.styles";

export default function InfoCard({ img, text }) {
  return (
    <S.InfoCardBox>
      <S.InfoImg src={img} alt="infoImg" />
      <S.InfoTitle>{text}</S.InfoTitle>
    </S.InfoCardBox>
  );
}
