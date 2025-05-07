import React, { useEffect, useState } from "react";

// hooks
import useGet from "../../hooks/useGet";

// styles
import * as S from "../../styles/booth/booth.styles";

// components
import BoothItem from "./BoothItem";

// store
import BoothStore from "../../stores/boothStore";

export default function BoothCategoryView({
  selectedCategory,
  setSelectedCategory,
  selectedMarker,
}) {
  const categoryTypeMap = {
    체험부스: "ACTIVITY",
    푸드트럭: "FOOD",
    프로모션: "PROMOTION",
  };

  const apiType = categoryTypeMap[selectedCategory] || "ACTIVITY";
  //const { data, loading, error } = useGet(`/api/booth?type=${apiType}`);

  // 반드시 함수 내부에서 호출!
  const boothDataByCategory = BoothStore((state) => state.boothDataByCategory);
  const setBoothDataByCategory = BoothStore(
    (state) => state.setBoothDataByCategory
  );

  // 카테고리에 따른 부스 데이터 설정
  /*   useEffect(() => {
    if (data && selectedCategory) {
      setBoothDataByCategory(
        selectedCategory,
        Array.isArray(data.data) ? data.data : []
      );
    }
  }, [data, selectedCategory, setBoothDataByCategory]); */

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
        {/* {loading && <div>로딩 중...</div>}
        {error && <div>에러 발생!</div>} */}
        {boothData.map((booth) => (
          <BoothItem
            key={booth.id}
            booth={booth}
            selectedMarker={selectedMarker}
          />
        ))}
      </S.BoothListContainer>
    </S.BoothCategoryViewLayout>
  );
}
