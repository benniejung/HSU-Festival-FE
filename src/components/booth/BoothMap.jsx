import React, { useEffect, useState } from "react";

// images
import BoothMapImg from "../../assets/booth/booth-map.svg";

// styles
import * as S from "../../styles/booth/booth.styles";

// components
import Marker from "./Marker";

// stores
import {
  activityMarkers,
  foodTruckMarkers,
  promotionMarkers,
} from "../../stores/markerStore";

export default function BoothMap({
  selectedMarker,
  setSelectedMarker,
  selectedCategory,
}) {
  const [markers, setMarkers] = useState([]);

  // 카테고리에 따른 마커 설정
  useEffect(() => {
    if (selectedCategory === "체험부스") {
      setMarkers(activityMarkers);
    } else if (selectedCategory === "푸드트럭") {
      setMarkers(foodTruckMarkers);
    } else if (selectedCategory === "프로모션") {
      setMarkers(promotionMarkers);
    }
  }, [selectedCategory]);

  return (
    <S.BoothMap>
      <S.BoothMapImage src={BoothMapImg} alt="boothMap" />
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          markerName={marker.id}
          top={marker.top}
          left={marker.left}
          selectedMarker={selectedMarker}
          setSelectedMarker={setSelectedMarker}
          selectedCategory={selectedCategory}
        />
      ))}
    </S.BoothMap>
  );
}
