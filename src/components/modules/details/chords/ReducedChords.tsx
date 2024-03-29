import ArrowSmSVG from "@/components/elements/svg/icons/interface/ArrowSmSVG";
import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";
import shortid from "shortid";

type TProps = {
  reducedChords: string[];
};

export default function ReducedChords({ reducedChords }: TProps) {
  return (
    <>
      {reducedChords.length > 0 ? (
        <section id="ReducedChords" className="mx-auto w-full">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-neutral-600 px-4 py-2 text-center text-foreground hover:bg-neutral-400 focus:outline-none focus-visible:ring focus-visible:ring-neutral-500/75">
                  <h2>Reduced chords</h2>
                  <ArrowSmSVG
                    className={clsx(
                      open ? "transition -rotate-90" : "transition rotate-90"
                    )}
                    pathClass="transition stroke-neutral-300 group-hover:stroke-neutral-100"
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 mx-8 flex flex-wrap gap-3 items-center gap-y-1">
                    {reducedChords.map((type) => {
                      return (
                        <a
                          key={shortid.generate()}
                          href="#"
                          className="underline"
                        >
                          {type}
                        </a>
                      );
                    })}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </section>
      ) : null}
    </>
  );
}
