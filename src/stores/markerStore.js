// 체험부스 마커 (지도 이미지 기준, % 단위)
const activityMarkers = [
  { id: 1, left: "9%", top: "10%" }, // 미래관 위쪽 첫 번째
  { id: 2, left: "14%", top: "10%" },
  { id: 3, left: "19%", top: "10%" },
  { id: 4, left: "24%", top: "10%" },
  { id: 21, left: "29%", top: "10%" },

  { id: 5, left: "3%", top: "40%" }, // 미래관 왼쪽
  { id: 6, left: "3%", top: "51%" },
  { id: 7, left: "3%", top: "63%" },

  { id: 8, left: "22%", top: "40%" }, // 미래관 오른쪽
  { id: 9, left: "22%", top: "51%" },

  { id: 14, left: "32%", top: "40%" },

  { id: 10, left: "8%", top: "70%" }, // 우촌관 위쪽
  { id: 11, left: "15%", top: "70%" },
  { id: 12, left: "24%", top: "70%" },
  { id: 13, left: "30%", top: "70%" },

  { id: 15, left: "53%", top: "28%" }, // 상상관 오른쪽
  { id: 16, left: "53%", top: "40%" },
  { id: 17, left: "53%", top: "51%" },

  // 중앙 광장
  { id: "18-1", left: "59%", top: "32%" },
  { id: "18-2", left: "63%", top: "24%" },
  { id: "19-2", left: "63%", top: "36%" },
  { id: "21-1", left: "59%", top: "44%" },
  { id: "20-1", left: "63%", top: "50%" },
  { id: "20-2", left: "59%", top: "56%" },

  // 진리관 아래쪽
  { id: 22, left: "57%", top: "70%" },
  { id: 23, left: "60%", top: "81%" },
  { id: 24, left: "67%", top: "85%" },
  { id: 25, left: "90%", top: "81%" },
];

// 푸드트럭 마커
const foodTruckMarkers = [
  {
    id: 1,
    left: "63%",
    top: "22%",
  },
  {
    id: 2,
    left: "69%",
    top: "22%",
  },
  {
    id: 3,
    left: "75%",
    top: "22%",
  },
  {
    id: 4,
    left: "63%",
    top: "62%",
  },
  {
    id: 5,
    left: "69%",
    top: "62%",
  },
  {
    id: 6,
    left: "75%",
    top: "62%",
  },
];

// 프로모션 마커
const promotionMarkers = [
  {
    id: 1,
    left: "53%",
    top: "28%",
  },
];

export { activityMarkers, foodTruckMarkers, promotionMarkers };
