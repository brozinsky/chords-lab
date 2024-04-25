import React from "react";

const ChordProgression = () => {
  return (
    <div className="border border-neutral-500 mb-16 w-full max-w-[742px] min-h-48 bg-neutral-800 flex flex-col gap-2 px-6 rounded-2xl py-4 overflow-auto justify-between">
      <h2 className="mb-3 text-xl">Progression</h2>
      <div className="flex gap-6 mx-auto">
        <div className="transition min-w-[100px] items-center justify-center flex flex-col px-4 py-3 gap-1 rounded-xl bg-card border-2 border-neutral-400 cursor-pointer hover:border-neutral-300">
          <div className="text-xl">1maj</div>
          <div className="text-sm">C - D - E</div>
        </div>
        <div className="flex flex-col py-4 gap-2 rounded-lg">
          <div>{"->"}</div>
        </div>
        <div className="transition min-w-[100px] items-center justify-center flex flex-col px-4 py-3 gap-1 rounded-xl bg-card border-2 border-neutral-400 cursor-pointer hover:border-neutral-300">
          <div className="text-xl">1maj</div>
          <div className="text-sm">C - D - E</div>
        </div>
        <div className="flex flex-col py-4 gap-2 rounded-lg">
          <div>{"->"}</div>
        </div>
        <div className="min-w-[100px] items-center transition border-dashed justify-center flex flex-col px-4 py-3 gap-1 rounded-xl border-2 border-neutral-300 cursor-pointer hover:border-neutral-100">
          <div className="text-3xl hover:text-white transition">+</div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ChordProgression;
