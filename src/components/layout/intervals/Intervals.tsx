import React, { useEffect } from "react";
import MenuTop from "@/components/modules/navigation/MenuTop";
import { Interval, Note } from "tonal";

const Intervals = () => {
  const test = Interval.num("5P");
  useEffect(() => {
    console.log(test);
  }, [test]);
  return (
    <>
      <MenuTop />
      <main>
        <div className="container flex flex-col items-center justify-center py-12">
          <div className="flex flex-row"></div>
        </div>
        <section className="py-20">
          <div>"D"</div>
          <div>{Note.transpose("D", "2m")}</div>
        </section>
      </main>
    </>
  );
};

export default Intervals;
