import { cn } from "@/lib/utils";
import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

type TProps = {
  label?: string;
  options: any;
  defaultValue?: string;
  variant?: "base" | "ghost" | "outlined";
  state: any;
  setState: any;
  displayValue?: string;
  buttonClassName?: string;
  contentType?: "type" | "tonic" | undefined;
  size?: "sm" | undefined;
};

export default function SelectProgression({
  variant = "base",
  label,
  options,
  contentType,
  state,
  setState,
  displayValue,
  buttonClassName,
  size,
}: TProps) {

  return (
    <Listbox
      id="SelectProgression"
      as={"div"}
      className={cn(
        `w-[250px] select-input select-input--${variant}`,
        size && `select-input--${size}`
      )}
      value={state}
      onChange={setState}
    >
      {label && (
        <Listbox.Label className={"select-input__label block"}>
          {label}
        </Listbox.Label>
      )}
      <div className={clsx(buttonClassName, "overflow-hidden")}>
        <Listbox.Button
          className={
            "!text-center select-input__button relative truncate nowrap overflow-hidden text-ellipsis"
          }
        >
          {displayValue ? displayValue : state}
        </Listbox.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options
          className={clsx(
            contentType === "type" && "select-input__list--type",
            contentType === "tonic" && "select-input__list--tonic",
            "select-input__list !min-w-[250px]"
          )}
        >
          {options.map(({ id, name, value }: any) => (
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