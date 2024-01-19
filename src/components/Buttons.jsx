import { useContext } from "react";
import { FormContext } from "../contextAPI/FormContext";

import { StepContext } from "../contextAPI/StepContext";
import { pages } from "../data/data";

function Buttons() {
  const { state } = useContext(FormContext);
  const { step, dispatchStep } = useContext(StepContext);
  const isLastStep = step.current === pages.length;

  function goNext() {
    if (isLastStep) {
      dispatchStep({ type: "DONE" });
      return;
    }

    dispatchStep({ type: "NEXT_STEP" });
  }

  function goBack() {
    dispatchStep({ type: "BACK_STEP" });
  }

  if (step.isCompleted) return;

  return (
    <div className="px-4 flex bg-white p-4 font-medium text-body-m w-full fixed bottom-0 left-0 desktop:static desktop:p-0">
      {step.current > 1 && (
        <button
          className="text-gray hover:text-denim transition-colors"
          onClick={goBack}
          type="button"
        >
          Go Back
        </button>
      )}
      <button
        className={`${
          isLastStep
            ? "bg-purple hover:bg-purple-hover"
            : "bg-denim hover:bg-denim-hover"
        } text-white px-4 py-3 ml-auto transition-colors rounded-small desktop:rounded-large desktop:px-6 desktop:py-[0.875rem] disabled:bg-gray`}
        onClick={goNext}
        type="button"
        disabled={state.isValidationError}
      >
        {isLastStep ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}

export default Buttons;
