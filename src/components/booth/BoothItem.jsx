import React from "react";

// styles
import * as S from "../../styles/booth/booth.styles";
import SearchIcon from "../../assets/home/search.png";


export default function BoothItem({
  booth,
  selectedMarker,
  setSelectedMarker,
  onOpenModal, // 모달 오픈 함수 props로 받기
}) {
  const handleClick = () => {
    setSelectedMarker(booth.boothNum);
  };

  const handleImageClick = (e) => {
    e.stopPropagation(); // 부모 클릭 막기
    onOpenModal?.(booth);
  };

  return (
    <S.BoothItemRow
      selected={selectedMarker === booth.boothNum}
      onClick={handleClick} // ✅ marker만 설정
    >
      <S.BoothTextCol>
        <S.BoothName>
          {booth.boothNum}. {booth.name}
        </S.BoothName>
        <S.BoothTimeRow>
          <S.BoothLabel>운영 시간 :</S.BoothLabel>
          <S.BoothDescription>{booth.time}</S.BoothDescription>
        </S.BoothTimeRow>
        <S.BoothLabel>활동</S.BoothLabel>
        <S.BoothDescription>{booth.description}</S.BoothDescription>
      </S.BoothTextCol>
      <S.BoothImageBox onClick={handleImageClick}>
        <S.BoothImage
          src={booth.imageUrl || 
            "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-13/186fb3b2-2756-40d1-8580-ab50299217dd.png"}
          alt={booth.name}
        />
        <S.IconHint>
          <img src={SearchIcon} alt="상세 보기" />
        </S.IconHint>      </S.BoothImageBox>
    </S.BoothItemRow>
  );
}