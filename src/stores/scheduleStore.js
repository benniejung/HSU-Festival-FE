import { create } from "zustand";

export const useScheduleStore = create((set) => ({
  selectedDate: "5.14",
  schedules: [],
  loading: false,
  error: null,
  dates: [
    { date: "5.14", day: "수요일" },
    { date: "5.15", day: "목요일" },
    { date: "5.16", day: "금요일" },
  ],

  // 임시 데이터 (실제로는 API에서 받아올 데이터)
  mockSchedules: {
    5.14: [
      { id: 1, time: "15:30", title: "개회식", status: "완료" },
      { id: 2, time: "16:00", title: "낙산가요제", status: "진행 중" },
      { id: 3, time: "19:00", title: "영화제", status: "대기 중" },
    ],
    5.15: [
      { id: 3, time: "17:10", title: "동아리 공연", status: "대기 중" },
      { id: 4, time: "19:30", title: "아티스트 공연", status: "대기 중" },
    ],
    5.16: [
      { id: 5, time: "16:50", title: "동아리 공연", status: "대기 중" },
      { id: 6, time: "19:00", title: "폐막식", status: "대기 중" },
      { id: 7, time: "19:30", title: "아티스트 공연", status: "대기 중" },
    ],
  },

  // Actions
  setSelectedDate: (date) => set({ selectedDate: date }),

  // 현재 시간을 기준으로 일정 상태 업데이트
  updateScheduleStatus: (schedules, selectedDate) => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // getMonth()는 0-11을 반환하므로 1을 더함
    const currentDate = now.getDate();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute; // 분 단위로 변환

    // 선택된 날짜에서 월과 일 추출 (예: "5.14" -> month: 5, date: 14)
    const [month, date] = selectedDate.split(".").map(Number);

    return schedules.map((schedule) => {
      const [hours, minutes] = schedule.time.split(":").map(Number);
      const scheduleTime = hours * 60 + minutes; // 분 단위로 변환

      let status = schedule.status;

      // 현재 날짜가 선택된 날짜보다 이전이면 모든 일정이 대기 중
      if (
        currentMonth < month ||
        (currentMonth === month && currentDate < date)
      ) {
        status = "대기 중";
      }
      // 현재 날짜가 선택된 날짜보다 이후면 모든 일정이 완료
      else if (
        currentMonth > month ||
        (currentMonth === month && currentDate > date)
      ) {
        status = "완료";
      }
      // 같은 날짜인 경우 시간으로 판단
      else {
        if (currentTime > scheduleTime + 120) {
          // 2시간 후
          status = "완료";
        } else if (
          currentTime >= scheduleTime &&
          currentTime <= scheduleTime + 120
        ) {
          status = "진행 중";
        } else {
          status = "대기 중";
        }
      }

      return { ...schedule, status };
    });
  },

  fetchSchedules: async (date) => {
    set({ loading: true, error: null });
    try {
      const data = useScheduleStore.getState().mockSchedules[date];
      // 현재 시간 기준으로 상태 업데이트 (date 파라미터 전달)
      const updatedSchedules = useScheduleStore
        .getState()
        .updateScheduleStatus(data, date);
      set({ schedules: updatedSchedules });
    } catch (error) {
      set({ error: "일정을 불러오는데 실패했습니다." });
      console.error("일정을 불러오는데 실패했습니다:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
