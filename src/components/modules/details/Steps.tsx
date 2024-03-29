import { getNumberStepsArray, getWholeAndHalfSteps } from "@/utils/notes";
import React from "react";
import shortid from "shortid";
import { Tooltip as ReactTooltip } from "react-tooltip";

type TProps = {
  notesChroma: string;
};

const fullStepInfo = [
  { value: "W", name: "Whole step" },
  { value: "H", name: "Half step" },
  { value: "W+H", name: "Whole and a Half step" },
];

export default function Steps({ notesChroma }: TProps) {
  return (
    <section
      id="Steps"
      className="flex flex-col gap-2 px-6 rounded-2xl bg-neutral-800 p-2 pb-4"
    >
      <h2>Steps:</h2>

      <table>
        <tbody>
          <tr>
            {getNumberStepsArray(notesChroma).map((step) => {
              return (
                <React.Fragment key={shortid.generate()}>
                  <td className="text-sm px-1.5 text-center border border-neutral-500">
                    {step}
                  </td>
                </React.Fragment>
              );
            })}
          </tr>
          <tr>
            {getWholeAndHalfSteps(getNumberStepsArray(notesChroma)).map(
              (step) => {
                const foundStep = fullStepInfo.find(
                  (item) => item.value === step
                );
                return (
                  <React.Fragment key={shortid.generate()}>
                    <td
                      data-tooltip-id={"step-" + step}
                      className="cursor-default text-sm px-1.5 text-center border border-neutral-500"
                    >
                      {step}
                      <ReactTooltip
                        key={step}
                        id={"step-" + step}
                        place="bottom"
                        variant="light"
                        content={foundStep && foundStep.name}
                      />
                    </td>
                  </React.Fragment>
                );
              }
            )}
          </tr>
        </tbody>
      </table>
    </section>
  );
}
