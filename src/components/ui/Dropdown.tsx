import { Menu, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface Props {
  children: ReactNode;
  trigger?: ReactNode;
}

export default function Dropdown({ children, trigger }: Props) {
  return (
    <div id="Dropdown" className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            {trigger ? (
              trigger
            ) : (
              <button className="cursor-pointer">Dropdown</button>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-50 absolute right-0 mt-3 w-56 origin-top-right divide-y divide-neutral-800 rounded-md bg-neutral-500">
            {children}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
