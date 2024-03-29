import { getAllChords } from "@/utils/chords";
import { TChord } from "@/utils/types";
import { useQuery } from '@tanstack/react-query';

let initAllChords: TChord[] | null = null;

const initializeAllChords = async () => {
  if (initAllChords === null) {
    initAllChords = await getAllChords();
  }
  return initAllChords;
};

export default function useAllChordsStore() {
  const {
    data: allChordsData,
    isLoading: isLoadingAllChords,
    error: errorAllChords,
    isError: isErrorAllChords,
    refetch: refetchAllChords,
    isRefetching: isRefetchingAllChords,
  } = useQuery({
    queryKey: ["All Chords"],
    queryFn: initializeAllChords,
    // queryFn: () => Promise.reject("Treść błędu")
  });

  return {
    allChordsData,
    isLoadingAllChords,
    errorAllChords,
    isErrorAllChords,
    refetchAllChords,
    isRefetchingAllChords,
  };
}
