import { InputOption, SetState, State } from "@/utils/types";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type Props = {
  label?: string;
  options: InputOption[];
  defaultValue?: string;
  variant?: "base" | "ghost";
  state: State;
  setState: SetState;
  displayValue?: string;
};

export default function Select({
  variant = "base",
  label,
  options,
  state,
  setState,
  displayValue,
}: Props) {
  // const [state, setState] = useState(
  //   defaultValue ? defaultValue : options[0].value
  // );

  return (
    <Listbox
      id="Select"
      as={"div"}
      className={`select-input select-input--${variant}`}
      value={state}
      onChange={setState}
    >
      {label && (
        <Listbox.Label className={"select-input__label block truncate"}>
          {label}
        </Listbox.Label>
      )}
      <Listbox.Button className={"select-input__button relative"}>
        {displayValue ? displayValue : state}
      </Listbox.Button>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options className="select-input__list">
          {options.map(({ id, name, value }) => (
            <Listbox.Option
              key={id}
              className={({ active }: any) =>
                `select-input__option ${
                  active && "select-input__option--active"
                }`
              }
              value={value}
            >
              <span
                className={`block truncate ${
                  value === state ? "font-bold" : ""
                }`}
              >
                {name}
              </span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}
