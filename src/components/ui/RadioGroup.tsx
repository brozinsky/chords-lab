import { RadioGroup as HUIRadioGroup } from "@headlessui/react";
import { cva } from "class-variance-authority";

const optionStyles = cva(
  ["flex gap-2 items-center w-full h-full select-none text-center"],
  {
    variants: {
      checked: {
        true: ["", "dark:bg-dark-100"],
        false: ["", "dark:bg-dark-800"],
      },
    },
  }
);

type Option = {
  id: string;
  label: string;
  value: string;
};

type State = string;

type SetState = React.Dispatch<React.SetStateAction<State>>;

type RadioGroupProps = {
  state: State;
  setState: SetState;
  options: Option[];
  label?: string;
  defaultOption?: string;
};

const RadioGroup = ({ state, setState, options, label }: RadioGroupProps) => {
  return (
    <HUIRadioGroup
      className={"flex flex-wrap justify-start items-center h-fit w-fit gap-2"}
      value={state}
      onChange={setState}
    >
      {label && <HUIRadioGroup.Label>{label}</HUIRadioGroup.Label>}
      <div className={"flex flex-col flex-wrap justify-start items-start"}>
        {options.map(({ id, label, value }) => {
          return (
            <HUIRadioGroup.Option
              className={`h-fit w-fit cursor-pointer min-w-[80px]`}
              key={id}
              value={value}
            >
              {({ checked }) => (
                <div className={optionStyles({ checked })}>
                  <div className="rounded-full border-neutral-100 border h-4 w-4 flex items-center justify-center">
                    {checked && (
                      <div className="rounded-full bg-neutral-100 h-1.5 w-1.5"></div>
                    )}
                  </div>
                  {label}
                </div>
              )}
            </HUIRadioGroup.Option>
          );
        })}
      </div>
    </HUIRadioGroup>
  );
};

export default RadioGroup;
