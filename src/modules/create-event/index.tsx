"use client";

import { useState } from "react";
import Footer from "./components/footer";
import CreateEventStepper from "./components/stepper";
import CreateEventInfoText from "./components/info";
import { AnimatePresence } from "motion/react";
import CreateEventInput from "./components/input";
import SelectableList from "./components/selectable-list";
import MemoryUpload from "./components/upload-image";

function CreateEventPage() {
  const [selectedStep, setSelectedStep] = useState(1);

  const handleNext = () => {
    setSelectedStep(selectedStep + 1);
  };

  const handlePrevious = () => {
    setSelectedStep(selectedStep - 1);
  };

  return (
    <div className="w-screen flex flex-col h-screen">
      <CreateEventStepper totalSteps={14} selectedStep={selectedStep} />
      <div className="flex flex-1 bg-gray-50 justify-center items-center px-4 flex-col relative">
        <AnimatePresence>
          {selectedStep === 1 ? (
            <CreateEventInfoText>
              <div className="text-2xl">
                Hi, we are going to create a birthday gift for Kirti and I need
                your help with it.
              </div>
            </CreateEventInfoText>
          ) : null}
          {selectedStep === 2 ? (
            <CreateEventInfoText>
              The answers you give are only visible to Kirti. 🤐
            </CreateEventInfoText>
          ) : null}
          {selectedStep === 3 ? (
            <CreateEventInfoText>Lets Start? 🚀</CreateEventInfoText>
          ) : null}
          {selectedStep === 4 ? (
            <CreateEventInput label="What does Kirti call you?" />
          ) : null}
          {selectedStep === 5 ? (
            <CreateEventInput
              label="What is your favourite memory with Kirti?"
              textarea
            />
          ) : null}
          {selectedStep === 6 ? (
            <CreateEventInfoText textCenter>
              That is very sweet! 💝
            </CreateEventInfoText>
          ) : null}

          {selectedStep === 7 ? (
            <CreateEventInput
              label="What is one thing that Kirti has taught you?"
              textarea
            />
          ) : null}
          {selectedStep === 8 ? (
            <SelectableList
              label="How do you know Kirti?"
              options={[
                "School",
                "College",
                "Work",
                "Family",
                "Partner",
                "Other",
              ]}
            />
          ) : null}
          {selectedStep === 9 ? (
            <CreateEventInfoText textCenter>Nice!</CreateEventInfoText>
          ) : null}
          {selectedStep === 10 ? (
            <MemoryUpload label="Add your favourite photo memories with Kirti 📷" />
          ) : null}
          {selectedStep === 11 ? (
            <CreateEventInfoText textCenter>
              These photos are so CUTE 🤭
            </CreateEventInfoText>
          ) : null}
          {selectedStep === 12 ? (
            <CreateEventInfoText textCenter>
              Thanks for being an amazing friend! 🎉. Lets wish Kirti a Happy
              Birthday.
            </CreateEventInfoText>
          ) : null}
          {selectedStep === 13 ? (
            <CreateEventInput
              label="Tell Kirti how you feel 🎂"
              textarea
              placeholder="OMG! I cant believe you are turning 28! Wishing you a very happy birthday! 🎉"
            />
          ) : null}
        </AnimatePresence>
      </div>
      <Footer
        isLastStep={selectedStep === 14}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}

export default CreateEventPage;
