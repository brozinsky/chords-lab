import { chords } from "@/utils/chords";
import { useQuery } from "@tanstack/react-query";
import useFilterStore from "@/stores/chords/useFilterStore";

export default function useAllChordsRootStore() {
  const { allChordsRoot } = useFilterStore();

  const filterChordsByRoot = () => {
    const chordsWithRoot = chords.map((chord) => ({
      ...chord,
      root: allChordsRoot,
    }));
    return chordsWithRoot;
  };

  const {
    data: allChordsRootData,
    isLoading: isLoadingAllChordsRoot,
    error: errorAllChordsRoot,
    isError: isErrorAllChordsRoot,
    refetch: refetchAllChordsRoot,
    isRefetching: isRefetchingAllChordsRoot,
  } = useQuery({
    queryKey: ["All Chords By Root", allChordsRoot],
    queryFn: () => filterChordsByRoot(),
    // queryFn: () => Promise.reject("Treść błędu")
  });

  return {
    allChordsRootData,
    isLoadingAllChordsRoot,
    errorAllChordsRoot,
    isErrorAllChordsRoot,
    refetchAllChordsRoot,
    isRefetchingAllChordsRoot,
  };
}
