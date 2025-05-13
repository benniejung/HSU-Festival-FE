import React, { useEffect, useState } from "react";

// hooks
import useGet from "../../hooks/useGet";

// styles
import * as S from "../../styles/booth/booth.styles";

// components
import BoothItem from "./BoothItem";

// store
import BoothStore from "../../stores/boothStore";
import Loading from "../../shared/loading/Loading";

// modal
import Modal from "../../components/booth/BoothModal"; // 범용 모달 불러오기

export default function BoothCategoryView({
  selectedCategory,
  setSelectedCategory,
  selectedMarker,
  setSelectedMarker,
  showModal,
  setShowModal,
  selectedBooth,
  setSelectedBooth,
}) {
  const handleOpenModal = (booth) => {
    setSelectedBooth(booth);
    setShowModal(true);
  };

  const categoryTypeMap = {
    체험부스: "ACTIVITY",
    푸드트럭: "FOOD",
    프로모션: "PROMOTION",
  };

  const apiType = categoryTypeMap[selectedCategory] || "ACTIVITY";
  const { data, loading, error } = useGet(`/api/booth?type=${apiType}`);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  // 반드시 함수 내부에서 호출!
  const boothDataByCategory = BoothStore((state) => state.boothDataByCategory);
  const setBoothDataByCategory = BoothStore(
    (state) => state.setBoothDataByCategory
  );

  // 카테고리에 따른 부스 데이터 설정
  useEffect(() => {
    if (data && selectedCategory) {
      setBoothDataByCategory(
        selectedCategory,
        Array.isArray(data.data) ? data.data : []
      );
    }
  }, [data, selectedCategory, setBoothDataByCategory]);

  // zustand에서 데이터 꺼내기
  const boothData = boothDataByCategory[selectedCategory] || [];

  return (
    <S.BoothCategoryViewLayout>
      <S.CategoryListContainer>
        {Object.keys(categoryTypeMap).map((category) => (
          <S.CategoryItem
            key={category}
            onClick={() => setSelectedCategory(category)}
            selected={selectedCategory === category}
          >
            {category}
          </S.CategoryItem>
        ))}
      </S.CategoryListContainer>

      <S.BoothListContainer>
        {loading && <Loading />}
        {error && <div>에러 발생!</div>}

        {boothData.map((booth) => (
          <BoothItem
            key={booth.id}
            booth={booth}
            selectedMarker={selectedMarker}
            setSelectedMarker={setSelectedMarker}
            onOpenModal={handleOpenModal} // 여기 넘겨줘야 함
            selectedBooth={selectedBooth}
          />
        ))}
      </S.BoothListContainer>

      {/*  모달 조건부 렌더링 */}
      {showModal && selectedBooth && (
        <Modal
          title={`${selectedBooth.boothNum}. ${selectedBooth.name}`}
          content={selectedBooth.description}
          imgUrl={selectedBooth.imageUrl}
          onClose={() => setShowModal(false)}
        />
      )}
    </S.BoothCategoryViewLayout>
  );
}
