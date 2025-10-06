"use client";
import { useEffect, useMemo, useState } from "react";
import { Card, DatePicker, Segmented, Tag } from "antd";
import dayjs from "dayjs";
import { useBookingStore } from "../store/bookingStore";
import { generateTimeSlots } from "../utils/generateTimeSlots";
import StepNavigation from "./common/StepNavigation";

export default function DateTimePicker({ onNext, onPrev }) {
  const { date, time, setField } = useBookingStore();
  const [showAll, setShowAll] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs(date || new Date()));

  useEffect(() => {
    if (!date) setField("date", selectedDate.toDate());
  }, []);

  const slots = useMemo(
    () => generateTimeSlots(selectedDate.toDate(), showAll),
    [selectedDate, showAll]
  );

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-3">Choose a Date and Time</h2>
      <div className="flex items-center gap-3 mb-4">
        <DatePicker
          value={selectedDate}
          onChange={(d) => {
            setSelectedDate(d);
            setField("date", d?.toDate() || null);
            setField("time", null);
          }}
        />
        <Segmented
          options={[
            { label: "Only available", value: false },
            { label: "Show all", value: true },
          ]}
          value={showAll}
          onChange={setShowAll}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {slots.map((s) => (
          <button
            key={s.value}
            disabled={s.disabled}
            onClick={() => setField("time", s.value)}
            className={`px-3 py-1 rounded border text-sm ${
              s.disabled ? "opacity-40 cursor-not-allowed" : ""
            } ${
              time === s.value
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-blue-50"
            }`}
          >
            {s.label}{" "}
            {s.disabled && (
              <Tag color="default" className="ml-1">
                busy
              </Tag>
            )}
          </button>
        ))}
      </div>

      <StepNavigation
        onPrev={onPrev}
        onNext={onNext}
        nextDisabled={!date || !time}
      />
    </Card>
  );
}
