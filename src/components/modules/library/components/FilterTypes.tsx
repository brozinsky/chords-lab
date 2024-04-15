import FilterButton from "@/components/ui/buttons/FilterButton";
import shortid from "shortid";

const types = [
    "major",
    "minor"
]

type TTypes = (typeof types)[number];

type TProps = {
  activeType: TTypes;
  onClick: (type: TTypes) => void;
};

export default function FilterTypes({ onClick, activeType }: TProps) {
  return (
    <div className="flex flex-row gap-2">
      {types.map((type) => (
        <FilterButton
          key={shortid.generate()}
          item={type}
          active={type === activeType}
          onClick={() => onClick(type)}
          variant="type"
        />
      ))}
    </div>
  );
}
