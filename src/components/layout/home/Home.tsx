import React, { useState } from "react";
import BentoModule from "@/components/modules/bento/BentoModule";
import BentoTitle from "@/components/modules/bento/BentoTitle";
import BentoToggle from "@/components/modules/bento/BentoToggle";
import { useMediaQuery } from "@mantine/hooks";
import MobileNotSupported from "../MobileNotSupported";

const Home = () => {
  const [activeInstrument, setActiveInstrument] = useState<"piano" | "guitar">(
    "piano"
  );
  const matches = useMediaQuery("(max-width: 768px)");

  if (matches) {
    return <MobileNotSupported />;
  }

  return (
    <div className="container flex justify-center items-center py-8 xl:h-screen">
      <main className="grid grid-cols-3 lg:grid-cols-6 gap-4 w-full ">
        <BentoTitle order={"order-1"} width={"col-span-2"} height={"h-72"} />

        <BentoModule
          width={"col-span-3 lg:col-span-4 xl:col-span-3"}
          order={"lg:order-2 order-3"}
          variant="chords"
          category="library"
          height={"h-72"}
        />
        <BentoToggle
          order={"lg:order-3 order-2"}
          value={activeInstrument}
          setValue={setActiveInstrument}
        />

        <BentoModule
          width={"col-span-3 lg:col-span-5 xl:col-span-3"}
          order={"order-4"}
          variant="scales"
          category="library"
          height={"h-72"}
        />

        <BentoModule
          isDisabled
          width={"col-span-3 lg:col-span-6 xl:col-span-3"}
          order={"order-5"}
          variant="progression"
          category="playground"
          height={"h-72"}
        />

        {/* <BentoSettings width={"col-span-2"} /> */}
      </main>
    </div>
  );
};

export default Home;
