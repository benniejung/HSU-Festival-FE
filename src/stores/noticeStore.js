import { create } from "zustand";

export const useNoticeStore = create((set) => ({
  notices: [
    {
      id: 1,
      title: "2025 축제 일정 안내",
      date: "2025-05-01",
      isPined: false,
    },
    {
      id: 2,
      title: "2025 축제 일정 안내",
      date: "2025-05-01",
      isPined: false,
    },
    {
      id: 3,
      title: "2025 축제 일정 안내",
      date: "2025-05-01",
      isPined: false,
    },
    {
      id: 4,
      title: "2025 축제 일정 안내",
      date: "2025-05-01",
      isPined: false,
    },
    {
      id: 5,
      title: "2025 축제 일정 안내",
      date: "2025-05-01",
      isPined: false,
    },
  ],
  noticeDetail: {
    id: 1,
    title: "2025 축제 일정 안내",
    content: "2025년 축제는 5월 20일부터 22일까지 진행됩니다.",
    date: "2025-05-01",
    isPined: false,
    timeStamp: "2025-05-01 10:00:00",
  },
  setNotices: (notices) => set({ notices }),
  setNoticeDetail: (notice) => set({ noticeDetail: notice }),
}));
