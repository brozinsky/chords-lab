import { create } from "zustand";

const usePaginationStore = create((set) => ({
  currentPage: 1,
  setCurrentPage: (page) => set(() => ({ currentPage: page })),

  totalPages: 1,
  setTotalPages: (total) => {
    set(() => ({ totalPages: total }));
  },

  handleNextPage: () => {
    set((state) => ({
      currentPage:
        state.currentPage < state.totalPages
          ? state.currentPage + 1
          : state.currentPage,
    }));
  },

  handlePrevPage: () => {
    set((state) => ({
      currentPage:
        state.currentPage > 1 ? state.currentPage - 1 : state.currentPage,
    }));
  },
}));

export default usePaginationStore;
