import Button from "@/modules/common/components/button";
import { FooterProps } from "./types";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { STRINGS } from "@/modules/common/strings";

function Footer(props: FooterProps) {
  const { onNext, onPrevious, isLastStep } = props;

  return (
    <div className="w-full px-4 py-3 border-t border-gray-300 flex flex-row gap-2 fixed bottom-0">
      <div className="w-1/3">
        <Button
          label={STRINGS.previous}
          variant="secondary"
          onClick={onPrevious}
        />
      </div>
      <div className={isLastStep ? "w-full" : "w-2/3"}>
        <Button
          label={isLastStep ? STRINGS.done : STRINGS.next}
          frontIcon={isLastStep ? <FaCheck /> : <FaArrowRight />}
          onClick={onNext}
          variant={isLastStep ? "success" : "primary"}
        />
      </div>
    </div>
  );
}

export default Footer;
