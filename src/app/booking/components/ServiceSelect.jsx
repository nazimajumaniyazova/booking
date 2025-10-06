"use client";
import { Select, Card } from "antd";
import { useBookingStore } from "../store/bookingStore";
import StepNavigation from "./common/StepNavigation";

const options = [
  { value: "psychology", label: "Psychology" },
  { value: "cosmetology", label: "Cosmetology" },
  { value: "cardiology", label: "Cardiology" },
  { value: "not_sure", label: "Not sure" },
];

export default function ServiceSelect({ onNext, onPrev }) {
  const { service, setField } = useBookingStore();
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-3">Select a Service</h2>
      <Select
        options={options}
        value={service || undefined}
        onChange={(v) => setField("service", v)}
        placeholder="Choose service"
        className="w-full"
      />
      <StepNavigation onPrev={onPrev} onNext={onNext} nextDisabled={!service} />
    </Card>
  );
}
