import useChordParams from "@/hooks/useChordParams";
import { getChordDetails } from "@/utils/chords";
import { useQuery } from '@tanstack/react-query';


export default function useChordDetailsQuery() {
  const { root, type } = useChordParams();

  const {
    data: chordDetailsData,
    isLoading: isLoadingChordDetails,
    error: errorChordDetails,
    isError: isErrorChordDetails,
    refetch: refetchChordDetails,
    isRefetching: isRefetchingChordDetails,
  } = useQuery({
    queryKey: ["Chord details", root, type],
    queryFn: () => getChordDetails(root, type),
  });

  return {
    chordDetailsData,
    isLoadingChordDetails,
    errorChordDetails,
    isErrorChordDetails,
    refetchChordDetails,
    isRefetchingChordDetails,
  };
}
