import React, { useState, useEffect, useRef } from "react";
import * as S from "../../styles/booth/booth.styles";
import * as H from "../../styles/home/home.styles";

// images
import BoothBannerImg from "../../assets/booth/booth-banner.png";
import BoothBannerImgZoom from "../../assets/booth/zoom.png";
import BoothMap from "../../components/booth/BoothMap";
import BoothCategoryView from "../../components/booth/BoothCategoryView";

export default function Booth() {
  const [selectedCategory, setSelectedCategory] = useState("체험부스");
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const bannerRef = useRef(null);
  const contentRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedBooth, setSelectedBooth] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;

      const bannerRect = bannerRef.current.getBoundingClientRect();
      const bannerBottom = bannerRect.bottom;
      const windowHeight = window.innerHeight;

      // 배너가 화면에서 벗어났을 때만 fixed 상태로 변경
      if (bannerBottom <= 0 && window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 초기 로드 시 배너가 보이도록 설정
    window.scrollTo(0, 0);
    setIsFixed(false);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log(selectedBooth);
  }, [selectedBooth]);

  useEffect(() => {
    console.log("selectedMarker", selectedMarker);
  }, [selectedMarker]);

  return (
    <S.BoothLayout>
      <S.FestivalBoothBanner ref={bannerRef}>
        <S.BoothBannerZoomIcon src={BoothBannerImgZoom} alt="확대 아이콘" />
        <S.FestivalBoothBannerImage
          src={BoothBannerImg}
          alt="festivalMainBanner"
        />
      </S.FestivalBoothBanner>
      <H.MainContentContainer ref={contentRef} $isFixed={isFixed}>
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
          setSelectedMarker={setSelectedMarker}
          showModal={showModal}
          setShowModal={setShowModal}
          selectedBooth={selectedBooth}
          setSelectedBooth={setSelectedBooth}
        />
      </H.MainContentContainer>
    </S.BoothLayout>
  );
}
