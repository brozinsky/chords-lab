import Modal from "@/components/ui/Modal";
import ButtonInfo from "@/components/ui/buttons/ButtonInfo";
import ChordFormulaModal from "../chord-details/_partials/ChordFormulaModal";
import RelationsCircle from "./RelationsCircle";
import FormulaOctaveIntervals from "./FormulaOctaveIntervals";
import FormulaIntervals from "./FormulaIntervals";
import { useState } from "react";
import clsx from "clsx";

export default function Formula() {
  const [activeTab, setActiveTab] = useState(2);
  return (
    <div className="px-6 flex flex-col gap-2 mx-auto w-full rounded-2xl bg-neutral-800 p-2 items-start pb-4">
      <div className="flex flex-row justify-between w-full">
        <div className="w-[5rem] flex items-center">
          Formula:
          <Modal trigger={<ButtonInfo />}>
            <ChordFormulaModal />
          </Modal>
        </div>
        <div className="flex gap-2">
            <div className={clsx("cursor-pointer hover:bg-neutral-500 px-2 rounded-lg transition", activeTab === 0 && "bg-neutral-600")} onClick={() => setActiveTab(0)}>Circle</div>
            <div className={clsx("cursor-pointer hover:bg-neutral-500 px-2 rounded-lg transition", activeTab === 1 && "bg-neutral-600")} onClick={() => setActiveTab(1)}>Simple</div>
            <div className={clsx("cursor-pointer hover:bg-neutral-500 px-2 rounded-lg transition", activeTab === 2 && "bg-neutral-600")} onClick={() => setActiveTab(2)}>Octave</div>
          </div>
      </div>
      {activeTab === 0 && <RelationsCircle />}
      {activeTab === 1 && <FormulaIntervals />}
      {activeTab === 2 && <FormulaOctaveIntervals />}
    </div>
  );
}
