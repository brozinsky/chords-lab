import { useQuery } from "@tanstack/react-query";
import useAllChordsStore from "./useAllChordsStore";
import useFilterStore from "@/stores/chords/useFilterStore";

export default function useChordsByNotesStore() {
  const { allChordsData } = useAllChordsStore();
  const { notesChordsNotes } = useFilterStore();

  const filterChordsByNotes = () => {
    const filteredChords = allChordsData!.filter((chord: any) => {
      return notesChordsNotes.every((note) => {
        const included = chord.notesArr.includes(note);
        return included;
      });
    });
    return filteredChords;
  };

  const {
    data: chordsByNotesData,
    isLoading: isLoadingChordsByNotes,
    error: errorChordsByNotes,
    isError: isErrorChordsByNotes,
    refetch: refetchChordsByNotes,
    isRefetching: isRefetchingChordsByNotes,
  } = useQuery({
    queryKey: ["Tab", "Chords By Notes", notesChordsNotes],
    queryFn: () => filterChordsByNotes(),
    // queryFn: () => Promise.reject("Treść błędu")
  });

  return {
    chordsByNotesData,
    isLoadingChordsByNotes,
    errorChordsByNotes,
    isErrorChordsByNotes,
    refetchChordsByNotes,
    isRefetchingChordsByNotes,
  };
}
