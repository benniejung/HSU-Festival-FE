import React from "react";
import * as S from "../../styles/booth/booth.styles";

// images
import MarkerPinImg from "../../assets/booth/marker-pin.svg";
import MarkerPinSelectedImg from "../../assets/booth/marker-pin-selected.svg";

export default function Marker({
  markerName,
  top,
  left,
  selectedMarker,
  setSelectedMarker,
}) {
  return (
    <S.MarkerWrapper
      $top={top}
      $left={left}
      $isSelected={selectedMarker === markerName}
      onClick={() => setSelectedMarker(markerName)}
      title={markerName}
    >
      <S.MarkerImg
        src={
          selectedMarker === markerName ? MarkerPinSelectedImg : MarkerPinImg
        }
        alt={markerName}
      />
      <S.MarkerText>{markerName}</S.MarkerText>
    </S.MarkerWrapper>
  );
}
