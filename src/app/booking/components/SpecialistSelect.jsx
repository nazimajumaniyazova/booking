"use client";
import { Card, Button, Avatar, List, Radio } from "antd";
import { useState } from "react";
import { useBookingStore } from "../store/bookingStore";
import StepNavigation from "./common/StepNavigation";

const MOCK = [
  {
    id: 1,
    name: "Dr. Sara Karimova",
    gender: "F",
    years: 8,
    photo: "https://i.pravatar.cc/80?img=5",
  },
  {
    id: 2,
    name: "Dr. Timur R.",
    gender: "M",
    years: 12,
    photo: "https://i.pravatar.cc/80?img=15",
  },
  {
    id: 3,
    name: "Dr. Laylo A.",
    gender: "F",
    years: 6,
    photo: "https://i.pravatar.cc/80?img=20",
  },
];

export default function SpecialistSelect({ onNext, onPrev }) {
  const { specialist, setField } = useBookingStore();
  const [autoAssign, setAutoAssign] = useState(false);

  const selectedId = specialist?.id;

  const handleNext = () => {
    if (autoAssign && !selectedId) {
      setField("specialist", MOCK[0]);
    }
    onNext();
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-3">Select a Specialist</h2>
      <Radio
        checked={autoAssign}
        onChange={(e) => setAutoAssign(e.target.checked)}
      >
        Auto-assign first available
      </Radio>
      <List
        className="mt-3"
        itemLayout="horizontal"
        dataSource={MOCK}
        renderItem={(item) => (
          <List.Item
            onClick={() => setField("specialist", item)}
            className={`cursor-pointer rounded px-2 ${
              selectedId === item.id ? "bg-blue-50" : ""
            }`}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.photo} />}
              title={item.name}
              description={`Gender: ${item.gender} · Experience: ${item.years} years`}
            />
          </List.Item>
        )}
      />

      <StepNavigation
        onPrev={onPrev}
        onNext={handleNext}
        nextDisabled={!autoAssign && !selectedId}
      />
    </Card>
  );
}
