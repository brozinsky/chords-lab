import React from "react";
import Settings from "@/components/modules/settings/Settings";
import Piano from "@/components/modules/piano/Piano";
import Library from "@/components/modules/library/Library";

export default function Root() {

  return (
    <main className="bg-dark-800">
      <div className="container flex flex-col items-center justify-center py-20">
        <div className="flex flex-row">
          <Piano />
        </div>
      </div>
      <section className="text-white py-20">
        <Library />
      </section>
      <Settings />
    </main>
  );
}
