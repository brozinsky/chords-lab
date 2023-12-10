import useSelectedScale from "@/stores/useSelectedScale";
import ArrowSmSVG from "@/components/elements/svg/icons/interface/ArrowSmSVG";
import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";
import shortid from "shortid";

type Props = {
  scales: string[];
  heading: string;
};

export default function RelatedScales({ scales, heading }: Props) {
  const { setType } = useSelectedScale();

  return (
    <>
      {scales.length > 0 ? (
        <section id="RelatedScales" className="mx-auto w-full">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="transition flex w-full justify-between rounded-lg bg-neutral-600 px-4 py-2 text-center text-foreground hover:bg-neutral-400 focus:outline-none focus-visible:ring focus-visible:ring-neutral-500/75">
                  <h2>{heading}</h2>
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
                  <Disclosure.Panel className="px-4 pt-4 pb-2 flex flex-wrap gap-3 items-center gap-y-1">
                    {scales.map((type: string) => {
                      return (
                        <span
                          key={shortid.generate()}
                          onClick={() => setType(type)}
                          className="cursor-pointer underline"
                        >
                          {type}
                        </span>
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
