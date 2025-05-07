import { create } from "zustand";

const BoothStore = create((set) => ({
  boothDataByCategory: {},
  setBoothDataByCategory: (category, data) =>
    set((state) => ({
      boothDataByCategory: {
        ...state.boothDataByCategory,
        [category]: data,
      },
    })),
}));

export default BoothStore;
