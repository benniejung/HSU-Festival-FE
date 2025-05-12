import React, { useState } from "react";
import * as S from "../../styles/home/home.styles";

export default function InfoCard({ img, text, onClick }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setClicked(!clicked);
  };
  return (
    <S.InfoCardBox onClick={handleClick} $clicked={clicked}>
      <S.InfoImg src={img} alt="infoImg" />
      <S.InfoTitle $clicked={clicked}>{text}</S.InfoTitle>
    </S.InfoCardBox>
  );
}
