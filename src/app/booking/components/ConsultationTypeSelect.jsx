"use client";
import { Radio, Card } from "antd";
import { useBookingStore } from "../store/bookingStore";
import StepNavigation from "./common/StepNavigation";

export default function ConsultationTypeSelect({ onNext }) {
  const { consultationType, setField } = useBookingStore();
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-3">Select Consultation Type</h2>
      <Radio.Group
        onChange={(e) => setField("consultationType", e.target.value)}
        value={consultationType}
      >
        <Radio value="offline">Offline (at clinic/office)</Radio>
        <br />
        <Radio value="online">Online (video/audio)</Radio>
        <br />
        <Radio value="home">Home Visit (specialist comes)</Radio>
      </Radio.Group>
      <StepNavigation
        onNext={onNext}
        showPrev={false}
        nextDisabled={!consultationType}
      />
    </Card>
  );
}
