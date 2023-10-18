import FilterButton from "@/components/ui/FilterButton";
import shortid from "shortid";

const types = [
    "major",
    "minor"
]

type TypesTypes = (typeof types)[number];

type Props = {
  activeType: TypesTypes;
  onClick: (type: TypesTypes) => void;
};

export default function FilterTypes({ onClick, activeType }: Props) {
  return (
    <div className="flex flex-row gap-2">
      {types.map((type) => (
        <FilterButton
          key={shortid.generate()}
          item={type}
          active={activeType}
          onClick={() => onClick(type)}
          variant="type"
        />
      ))}
    </div>
  );
}
