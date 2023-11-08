import { create } from "zustand";

type MenuDrawerState = {
  isDrawerExpanded: boolean;
  setIsDrawerExpanded: (isDrawerExpanded: boolean) => void;
  toggleIsDrawerExpanded: () => void;

  isTwoRows: boolean;
  setIsTwoRows: (isTwoRows: boolean) => void;
  toggleIsTwoRows: () => void;
};

const useMenuDrawerStore = create<MenuDrawerState>((set) => ({
  isDrawerExpanded: true,
  setIsDrawerExpanded: (isDrawerExpanded) => set({ isDrawerExpanded }),
  toggleIsDrawerExpanded: () =>
    set((state) => ({ isDrawerExpanded: !state.isDrawerExpanded })),

  isTwoRows: true,
  setIsTwoRows: (isTwoRows) => set({ isTwoRows }),
  toggleIsTwoRows: () => set((state) => ({ isTwoRows: !state.isTwoRows })),
}));

export const useMenuDrawer = () => useMenuDrawerStore();
