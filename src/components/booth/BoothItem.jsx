import React from "react";

// styles
import * as S from "../../styles/booth/booth.styles";

export default function BoothItem({ booth, selectedMarker }) {
  return (
    <S.BoothItemRow selected={selectedMarker === booth.id}>
      <S.BoothTextCol>
        <S.BoothName>
          {booth.id}. {booth.name}
        </S.BoothName>
        <S.BoothTimeRow>
          <S.BoothLabel>운영 시간 :</S.BoothLabel>
          <S.BoothDescription>{booth.time}</S.BoothDescription>
        </S.BoothTimeRow>
        <S.BoothLabel>활동</S.BoothLabel>
        <S.BoothDescription>{booth.description}</S.BoothDescription>
      </S.BoothTextCol>
      <S.BoothImageBox>
        <S.BoothImage
          src={booth.imageUrl || "https://via.placeholder.com/80"}
          alt={booth.name}
        />
      </S.BoothImageBox>
    </S.BoothItemRow>
  );
}
