import { motion } from "framer-motion";
import { CreateEventStepperProps } from "./types";

function CreateEventStepper(props: CreateEventStepperProps) {
  const { selectedStep = 1, totalSteps = 3 } = props;

  return (
    <div className="w-full flex flex-row">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div key={index} className="h-3 flex-1 bg-purple-200 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: index + 1 <= selectedStep ? "100%" : "0%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`h-full ${
              selectedStep === totalSteps ? "bg-green-500" : "bg-purple-500"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

export default CreateEventStepper;
