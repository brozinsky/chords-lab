import clsx from "clsx";
import { MouseEventHandler } from "react";

type FilterButtonProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  item: string;
  active: boolean
  variant: string;
};

const FilterButton = ({
  onClick,
  item,
  active,
  variant
}: FilterButtonProps) => {
  return (
    <div
      id="FilterButton"
      onClick={onClick}
      className={clsx("chord-list-item", {
        "chord-list-item--active": active,
        "chord-list-item--note": variant === 'note',
        "chord-list-item--type": variant === 'type',
      })}
    >
      <div className="flex flex-col">
        <div className="chord-list-item__suffix capitalize">{item}</div>
      </div>
    </div>
  );
};

export default FilterButton;
