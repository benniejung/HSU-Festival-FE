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
  { id: "18-1", left: "70%", top: "22%" },
  { id: "18-2", left: "76%", top: "22%" },
  { id: "19-2", left: "82%", top: "28%" },
  { id: "20-1", left: "70%", top: "34%" },
  { id: "20-2", left: "76%", top: "34%" },
  { id: "21-1", left: "82%", top: "34%" },

  // 진리관 아래쪽
  { id: 22, left: "90%", top: "60%" },
  { id: 23, left: "82%", top: "80%" },
  { id: 24, left: "88%", top: "80%" },
  { id: 25, left: "94%", top: "80%" },
];

// 푸드트럭 마커
const foodTruckMarkers = [
  {
    id: 1,
    name: "핫도그 트럭",
    left: "60%",
    top: "70%",
  },
];

// 프로모션 마커
const promotionMarkers = [
  {
    id: 1,
    name: "프로모션 트럭",
    left: "60%",
    top: "70%",
  },
];

export { activityMarkers, foodTruckMarkers, promotionMarkers };
