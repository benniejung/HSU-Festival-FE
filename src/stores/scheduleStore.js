import { create } from "zustand";

export const useScheduleStore = create((set) => ({
  selectedDate: "5.15",
  schedules: [],
  loading: false,
  error: null,
  dates: [
    { date: "5.14", day: "수요일" },
    { date: "5.15", day: "목요일" },
    { date: "5.16", day: "금요일" },
  ],

  // 목 데이터
  mockSchedules: {
    5.14: [
      {
        id: 1,
        time: "15:30",
        endTime: "16:00",
        title: "개회식",
        content: "🎉 대동제의 시작을 알리는 개회식",
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-13/5a7272f2-6c02-4572-99b4-e2705222a1bc.png",
      },
      {
        id: 2,
        time: "16:00",
        endTime: "19:00",
        title: "낙산가요제",
        content:
          "🎧 [참가자]\n" +
          "1. 블랙홀(그라찌에)\n" +
          "2. R'adios(SuferZ)\n" +
          "3. 트로피칼(노바나 프로젝트)\n" +
          "4. SAVE AS(남궁혜성)\n" +
          "의심스러운 사랑(남청)\n" +
          "총(아나하)",
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-12/d9534fa6-ecc7-4efc-9642-777d4bf92437.png",
      },
      {
        id: 3,
        time: "19:00",
        endTime: "21:00",
        title: "영화제",
        content: "🎥 [한성대학교 영화제]\n" + "너의 결혼식 상영\n",
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-12/f25a2b68-d00a-4f7f-88b5-e8afe4f683a5.png",
      },
    ],
    5.15: [
      {
        id: 4,
        time: "17:10",
        endTime: "17:30",
        title: "브릴란테 공연",
        content:
          "🎧 [Setlist]\n" +
          "1. 바람이 지나가는 길 - 이웃집 토토로 OST\n" +
          "2. 어느 여름날 - 센과 치히로의 행방불명 OST\n" +
          "3. 이웃집 토토로 - 이웃집 토토로 엔딩주제가\n",
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-12/733fd4ba-2a8a-46ff-9e90-eb62e68d6365.png",
      },
      {
        id: 5,
        time: "17:30",
        endTime: "18:10",
        title: "탈패 공연",
        content: "한성대학교 중앙풍물패 탈패의 공연입니다.",
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-12/f72c64a9-aa32-4725-81a6-70267a093067.png",
      },
      {
        id: 6,
        time: "18:10",
        endTime: "18:55",
        title: "4호선마이크 공연",
        content: "한성대학교 버스킹동아리 4호선마이크의 공연입니다.",
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-12/5f686688-666e-4aa4-99b2-ed0274f5bea4.png",
      },
      {
        id: 7,
        time: "18:55",
        endTime: "19:30",
        title: "NOD 공연",
        content:
          "🎧 [Setlist]\n" +
          "1. The Chase & Supersonic - 하츠투하츠 & 프로미스나인\n" +
          "2. 오늘만 I LOVE YOU & Baggy Jeans - 보이넥스트도어 & NCT U\n" +
          "3. BANG BANG BANG + DDU-DU DDU-DU (mash up) - BIGBANG, BLACKPINK\n" +
          "4. like JENNIE - JENNIE\n" +
          "5. 손오공 & MAESTRO - 세븐틴",
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-12/5b51610d-ca4e-4121-b586-8bbb6d332cce.jpg",
      },
      {
        id: 8,
        time: "19:30",
        endTime: "22:00",
        title: "아티스트 공연",
        content: "✨ 로시(Rothy) / 우원재 / 이하이 ✨",
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-12/16b5df5d-4cc2-4b12-a257-7ca899bfcedf.png",
      },
    ],
    5.16: [
      {
        id: 9,
        time: "16:50",
        endTime: "17:35",
        title: "TRIAX 공연",
        content: `한성대학교 흑인음악동아리 트라이엑스(TRIAX)의 공연입니다.
        🎧 [Setlist]
        01 DNA Remix | 02 TNG
        03 Flawless | 04 Clean up Squad
        05 Guarantee1 | 06 Guarantee2
        07 dash | 08 사임사임
        09 NO FEAR | 10 범퍼카
        `,
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-12/90dc6e36-5653-4e2d-9d9c-eed310feeb63.jpg",
      },
      {
        id: 10,
        time: "17:35",
        endTime: "18:20",
        title: "왕산악 공연",
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
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-12/0027ac30-77e4-4868-8a41-8d64778d9707.jpg",
      },
      {
        id: 11,
        time: "18:20",
        endTime: "19:00",
        title: "들불 공연",
        content:
          "🎸 [Setlist]\n" +
          "1. 잔나비 - 전설\n" +
          "2. 터치드 - love is dangerous\n" +
          "3. 유다빈밴드 - 좋지 아니한가\n",
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-13/aa7a853d-b035-4bef-9701-a0b46a378e33.png",
      },
      {
        id: 12,
        time: "19:00",
        endTime: "19:30",
        title: "폐막식",
        content: "🎉 대동제를 마무리하는 폐막식",
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-13/92801e7f-5472-4c99-bc15-6e134e188580.png",
      },
      {
        id: 13,
        time: "19:30",
        endTime: "22:50",
        title: "아티스트 공연",
        content:
          "✨ UNIS(유니스) / 넬(NELL) / 체리필터(cherryfilter) / VIVIZ(비비지) ✨",
        status: "대기중",
        imgUrl:
          "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-12/16b5df5d-4cc2-4b12-a257-7ca899bfcedf.png",
      },
    ],
  },

  // Actions
  setSelectedDate: (date) => set({ selectedDate: date }),

  // 현재 시간을 기준으로 일정 상태 업데이트
  updateScheduleStatus: (schedules, selectedDate) => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentDate = now.getDate();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute; // 분 단위로 변환

    // 선택된 날짜에서 월과 일 추출 (예: "5.14" -> month: 5, date: 14)
    const [month, date] = selectedDate.split(".").map(Number);

    return schedules.map((schedule, index) => {
      const [hours, minutes] = schedule.time.split(":").map(Number);
      const scheduleTime = hours * 60 + minutes;
      const [endHours, endMinutes] = schedule.endTime.split(":").map(Number);
      const scheduleEndTime = endHours * 60 + endMinutes;

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
        if (currentTime >= scheduleEndTime) {
          status = "완료";
        } else if (
          currentTime >= scheduleTime &&
          currentTime < scheduleEndTime
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
