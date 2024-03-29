import { create } from "zustand";

type TState = {
  isDrawerExpanded: boolean;
  isTwoRows: boolean;
};

type TAction = {
  setIsDrawerExpanded: (isDrawerExpanded: boolean) => void;
  toggleIsDrawerExpanded: () => void;
  setIsTwoRows: (isTwoRows: boolean) => void;
  toggleIsTwoRows: () => void;
};

const useMenuDrawerStore = create<TState & TAction>((set) => ({
  isDrawerExpanded: true,
  setIsDrawerExpanded: (isDrawerExpanded) => set({ isDrawerExpanded }),
  toggleIsDrawerExpanded: () =>
    set((state) => ({ isDrawerExpanded: !state.isDrawerExpanded })),

  isTwoRows: true,
  setIsTwoRows: (isTwoRows) => set({ isTwoRows }),
  toggleIsTwoRows: () => set((state) => ({ isTwoRows: !state.isTwoRows })),
}));

export const useMenuDrawer = () => useMenuDrawerStore();
