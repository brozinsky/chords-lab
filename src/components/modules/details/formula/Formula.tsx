import Modal from "@/components/ui/Modal";
import ButtonInfo from "@/components/ui/buttons/ButtonInfo";
import ChordFormulaModal from "../../chord-details/_partials/ChordFormulaModal";
import RelationsCircle from "./RelationsCircle";
import FormulaOctaveIntervals from "./FormulaOctaveIntervals";
import FormulaIntervals from "./FormulaIntervals";
import { useState } from "react";
import clsx from "clsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const tabs = [{ name: "Circle" }, { name: "Intervals" }, { name: "Octave" }];

export default function Formula() {
  const [activeTab, setActiveTab] = useState(2);
  const [parent] = useAutoAnimate();

  return (
    <section
      id="Formula"
      className="px-6 flex flex-col gap-2 mx-auto w-full rounded-2xl bg-neutral-800 p-2 items-start pb-4"
    >
      <div className="flex flex-row justify-between w-full">
        <div className="w-[5rem] flex items-center">
          <h2>Formula:</h2>
          <Modal trigger={<ButtonInfo />}>
            <ChordFormulaModal />
          </Modal>
        </div>

        <div className="flex gap-2">
          {tabs.map(({ name }, index) => (
            <div
              key={name}
              className={clsx(
                "cursor-pointer hover:bg-neutral-500 px-2 rounded-lg transition select-none",
                activeTab === index && "bg-neutral-600"
              )}
              onClick={() => setActiveTab(index)}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full" ref={parent}>
        {activeTab === 0 && <RelationsCircle />}
        {activeTab === 1 && <FormulaIntervals />}
        {activeTab === 2 && <FormulaOctaveIntervals />}
      </div>
    </section>
  );
}
