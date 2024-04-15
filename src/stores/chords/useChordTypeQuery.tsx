import useChordParams from "@/hooks/useChordParams";
import { getChordType } from "@/utils/chords";
import { useQuery } from '@tanstack/react-query';


export default function useChordTypeQuery() {
  const { type } = useChordParams();

  const {
    data: chordTypeData,
    isLoading: isLoadingChordType,
    error: errorChordType,
    isError: isErrorChordType,
    refetch: refetchChordType,
    isRefetching: isRefetchingChordType,
  } = useQuery({
    queryKey: ["Chord details type", type],
    queryFn: () => getChordType(type),
  });

  return {
    chordTypeData,
    isLoadingChordType,
    errorChordType,
    isErrorChordType,
    refetchChordType,
    isRefetchingChordType,
  };
}
