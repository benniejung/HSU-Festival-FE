import { create } from "zustand";

export const useScheduleStore = create((set) => ({
  selectedDate: "5.14",
  schedules: [],
  loading: false,
  error: null,

  // 임시 데이터 (실제로는 API에서 받아올 데이터)
  mockSchedules: {
    5.14: [
      { id: 1, time: "16:40", title: "개회식", status: "완료" },
      { id: 2, time: "17:00", title: "동아리 공연", status: "진행 중" },
      { id: 3, time: "17:00", title: "총학생회 이벤트", status: "대기 중" },
    ],
    5.15: [
      { id: 3, time: "16:40", title: "밴드 공연", status: "대기 중" },
      { id: 4, time: "17:00", title: "댄스 공연", status: "대기 중" },
    ],
    5.16: [
      { id: 5, time: "16:40", title: "총학생회 이벤트", status: "대기 중" },
      { id: 6, time: "17:00", title: "폐회식", status: "대기 중" },
    ],
  },

  // Actions
  setSelectedDate: (date) => set({ selectedDate: date }),

  fetchSchedules: async (date) => {
    set({ loading: true, error: null });
    try {
      // 실제 API 호출로 대체 필요
      // const response = await fetch(`/api/schedules?date=${date}`);
      // const data = await response.json();

      // 임시로 목업 데이터 사용
      const data = useScheduleStore.getState().mockSchedules[date];
      set({ schedules: data });
    } catch (error) {
      set({ error: "일정을 불러오는데 실패했습니다." });
      console.error("일정을 불러오는데 실패했습니다:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
