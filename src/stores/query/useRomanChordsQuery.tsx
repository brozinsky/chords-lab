import { useQuery } from "@tanstack/react-query";
import useFilterStore from "@/stores/chords/useFilterStore";
import { getRomanChords } from "@/utils/functions/music-theory/getRomanChords";

export default function useRomanChordsQuery() {
  const { romanScaleTonic, romanScaleType } = useFilterStore();

  const romanChords = useQuery({
    queryKey: ["Tab", "Roman Chords", romanScaleTonic, romanScaleType],
    queryFn: () => getRomanChords(romanScaleTonic, romanScaleType),
    // queryFn: () => Promise.reject("Treść błędu")
  });

  return romanChords;
}
