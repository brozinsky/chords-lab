import { useQuery } from "@tanstack/react-query";
import useFilterStore from "@/stores/chords/useFilterStore";
import { getRomanChords } from "@/utils/functions/music-theory/getRomanChords";

export default function useRomanChordsStore() {
  const { romanScaleTonic, romanScaleType } = useFilterStore();

  const {
    data: romanChordsData,
    isLoading: isLoadingRomanChords,
    error: errorRomanChords,
    isError: isErrorRomanChords,
    refetch: refetchRomanChords,
    isRefetching: isRefetchingRomanChords,
  } = useQuery({
    queryKey: ["Tab","Roman Chords", romanScaleTonic, romanScaleType],
    queryFn: () => getRomanChords(romanScaleTonic, romanScaleType),
    // queryFn: () => Promise.reject("Treść błędu")
  });

  return {
    romanChordsData,
    isLoadingRomanChords,
    errorRomanChords,
    isErrorRomanChords,
    refetchRomanChords,
    isRefetchingRomanChords,
  };
}
