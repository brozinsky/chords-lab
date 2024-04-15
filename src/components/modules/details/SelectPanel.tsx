import Select from "@/components/ui/dropdowns/Select";
import useSelectedChord from "@/stores/chords/useSelectedChord";
import useSelectedScale from "@/stores/useSelectedScale";
import {
  chordQualityOptions,
  notesOptions,
  scaleTypeOptions,
} from "@/utils/functions/music-theory/selectOptions";
import { Scale } from "tonal";

type TProps = {
  variant: "scales" | "chords";
};

export default function SelectPanel({ variant }: TProps) {
  const { selectedChord, root, setRoot, quality, setQuality } =
    useSelectedChord();
  const { tonic, setTonic, type, setType } = useSelectedScale();

  let displayValue;
  if (variant === "scales") {
    const infoScale = Scale.get(`${tonic} ${type}`);
    displayValue = infoScale!.name.split(" ").slice(1).join(" ");
  }
  if (variant === "chords") {
    displayValue =
      selectedChord!.name && selectedChord!.name.length > 3
        ? selectedChord!.name.split(" ").slice(1).join(" ")
        : selectedChord!.aliases && selectedChord!.aliases[0];
  }

  const select1 = {
    options: notesOptions,
    state: variant === "chords" ? root : tonic,
    setState: variant === "chords" ? setRoot : setTonic,
  };
  const select2 = {
    options: variant === "chords" ? chordQualityOptions : scaleTypeOptions,
    state: variant === "chords" ? quality : type,
    setState: variant === "chords" ? setQuality : setType,
    displayValue: displayValue,
  };

  return (
    <div id="SelectPanel" className="flex flex-row gap-2 justify-center mb-6">
      <Select
        variant={"ghost"}
        contentType={"tonic"}
        options={select1.options}
        state={select1.state}
        setState={select1.setState}
      />
      <Select
        buttonClassName={"max-w-[500px]"}
        contentType={"type"}
        variant={"ghost"}
        options={select2.options}
        displayValue={select2.displayValue}
        state={select2.state}
        setState={select2.setState}
      />
    </div>
  );
}
