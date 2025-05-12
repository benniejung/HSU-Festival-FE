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
      {
        id: 1,
        time: "15:30",
        title: "개회식",
        content: "🎉 [대동제의 시작을 알리는 개회식]",
        status: "대기중",
        imgUrl: "",
      },
      {
        id: 2,
        time: "16:00",
        title: "낙산가요제",
        content:
          "제 47회 낙산가요제\n" +
          "🎧 [참가자]\n" +
          "블랙홀(그라찌에)\n" +
          "R'adios(SuferZ)\n" +
          "트로피칼(노바나 프로젝트)\n" +
          "SAVE AS(남궁혜성)\n" +
          "의심스러운 사랑(남청)\n" +
          "총(아나하)",
        status: "대기중",
        imgUrl: "https:s3~~",
      },
      {
        id: 3,
        time: "19:00", // - 20:50
        title: "영화제",
        content: "🎥 [한성대학교 영화제]\n" + "너의 결혼식 상영\n",
        status: "대기중",
        imgUrl: "https:s3~~",
      },
    ],
    5.15: [
      {
        id: 4,
        time: "17:10", //-17:30
        title: "동아리 공연(브릴란테)",
        content:
          "🎧 [Setlist]\n" +
          "1. 바람이 지나가는 길 - 이웃집 토토로 OST\n" +
          "2. 어느 여름날 - 센과 치히로의 행방불명 OST\n" +
          "3. 이웃집 토토로 - 이웃집 토토로 엔딩주제가\n",
        status: "대기중",
        imgUrl: "https:s3~~",
      },
      {
        id: 5,
        time: "17:30",
        title: "동아리 공연(탈패)",
        content: "한성대학교 중앙풍물패 탈패 동아리 공연입니다.",
        status: "대기중",
        imgUrl: "https:s3~~",
      },
      {
        id: 6,
        time: "18:10",
        title: "동아리 공연(4호선마이크)",
        content: "",
        status: "대기중",
        imgUrl: "https:s3~~",
      },
      {
        id: 7,
        time: "18:55",
        title: "동아리 공연(NOD)",
        content:
          "🎧 [Setlist]\n" +
          "1. The Chase & Supersonic - 하츠투하츠 & 프로미스나인\n" +
          "2. 오늘만 I LOVE YOU & Baggy Jeans - 보이넥스트도어 & NCT U\n" +
          "3. BANG BANG BANG + DDU-DU DDU-DU (mash up) - BIGBANG, BLACKPINK\n" +
          "4. like JENNIE - JENNIE\n" +
          "5. 손오공 & MAESTRO - 세븐틴",
        status: "대기중",
        imgUrl: "https:s3~~",
      },
    ],
    5.16: [
      {
        id: 8,
        time: "16:50",
        title: "동아리 공연(트라이엑스)",
        content: "[Setlist]" + "",
        status: "대기중",
        imgUrl: "https:s3~~",
      },
      {
        id: 9,
        time: "17:35",
        title: "동아리 공연(왕산악)",
        content:
          "🎸 [Setlist]\n" +
          "1. 새벽별 - 터치드\n" +
          "2. The Great Escape - Boys Like Girls\n" +
          "3. 逆光 - Ado\n" +
          "4. 낭만고양이 - 체리필터\n" +
          "5. We Will Rock You - Queen\n" +
          "6. You Give Love a Bad Name - Bon Jovi",
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-12/c501b2ec-90b2-42a4-9284-53caeb0af025.jpg",
      },
      {
        id: 9,
        time: "18:20", //-19:00
        title: "동아리 공연(들불)",
        content:
          "🎸[Setlist]\n" +
          "1. 잔나비 - 전설\n" +
          "2. 터치드 - love is dangerous\n" +
          "3. 유다빈밴드 - 좋지 아니한가\n",
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-12/5776b0fa-37f5-46fd-9dae-ad292917fded.jpg",
      },
      {
        id: 7,
        time: "19:00",
        title: "폐막식",
        content: "",
        status: "대기중",
        imgUrl: "https:s3~~",
      },
      {
        id: 8,
        time: "19:30",
        title: "아티스트 공연",
        content: "",
        status: "대기중",
        imgUrl: "https:s3~~",
      },
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
