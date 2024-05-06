import EditIconSVG from "@/components/elements/svg/icons/interface/EditIconSVG";
import Select from "@/components/ui/dropdowns/Select";
import {
  chordQualityOptions,
  notesOptions,
} from "@/utils/functions/music-theory/selectOptions";
import { TNotes } from "@/utils/types";

type TProps = {
  chordKey?: TNotes;
  setChordKey: (value: TNotes) => void;
  chordType?: string;
  setChordType: (value: string) => void;
};

const CustomChord = ({
  chordKey,
  chordType,
  setChordKey,
  setChordType,
}: TProps) => {
  return (
    <div>
      <h3 className="mb-3 flex gap-1.5 items-center"><EditIconSVG width={20} />Custom</h3>
      <div className="flex flex-row gap-2">
        <Select
          size={"sm"}
          variant={"outlined"}
          contentType={"tonic"}
          options={notesOptions}
          state={chordKey}
          setState={setChordKey}
        />
        <Select
          size={"sm"}
          variant={"outlined"}
          contentType={"tonic"}
          options={chordQualityOptions}
          state={chordType}
          setState={setChordType}
        />
      </div>
    </div>
  );
};

export default CustomChord;
