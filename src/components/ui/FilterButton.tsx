import clsx from "clsx";
import { MouseEventHandler } from "react";

type FilterButtonProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  item: string;
  active: string;
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
      onClick={onClick}
      className={clsx("chord-list-item", {
        "chord-list-item--active": active === item,
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
