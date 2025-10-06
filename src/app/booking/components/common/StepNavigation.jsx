"use client";
import { Button } from "antd";

export default function StepNavigation({
  onNext,
  onPrev,
  onRestart,
  nextDisabled = false,
  nextLabel = "Next",
  prevLabel = "Back",
  showPrev = true,
  showNext = true,
  align = "between", // 'between' | 'right' | 'center'
}) {
  const alignment =
    align === "right"
      ? "justify-end"
      : align === "center"
      ? "justify-center"
      : "justify-between";

  return (
    <div className={`mt-4 flex ${alignment}`}>
      {showPrev && (
        <Button onClick={onPrev} className="min-w-[100px]">
          {prevLabel}
        </Button>
      )}

      {showNext && (
        <Button
          type="primary"
          disabled={nextDisabled}
          onClick={onNext}
          className="min-w-[100px]"
        >
          {nextLabel}
        </Button>
      )}

      {onRestart && (
        <Button type="primary" className="ml-2" onClick={onRestart}>
          Start New Booking
        </Button>
      )}
    </div>
  );
}
