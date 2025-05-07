import React, { useState } from "react";
import * as S from "../../styles/booth/booth.styles";
import * as H from "../../styles/home/home.styles";

// images
import BoothBannerImg from "../../assets/booth/booth-banner.svg";
import BoothMap from "../../components/booth/BoothMap";
import BoothCategoryView from "../../components/booth/BoothCategoryView";

export default function Booth() {
  const [selectedCategory, setSelectedCategory] = useState("체험부스");
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <S.BoothLayout>
      <H.FestivalMainBanner>
        <H.FestivalMainBannerImage
          src={BoothBannerImg}
          alt="festivalMainBanner"
        />
      </H.FestivalMainBanner>
      <H.MainContentContainer>
        {/* 지도 뷰 */}
        <BoothMap
          selectedCategory={selectedCategory}
          selectedMarker={selectedMarker}
          setSelectedMarker={setSelectedMarker}
        />
        {/* 카테고리 뷰 */}
        <BoothCategoryView
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedMarker={selectedMarker}
        />
      </H.MainContentContainer>
    </S.BoothLayout>
  );
}
