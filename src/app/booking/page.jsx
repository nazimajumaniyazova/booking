"use client";
import { Steps } from "antd";
import { useState, useEffect } from "react";
import { steps } from "./config/steps";
import { useBookingStore } from "./store/bookingStore";
import Loader from "@/components/ui/Loader";

export default function BookingPage() {
  const [current, setCurrent] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  const { reset } = useBookingStore();

  useEffect(() => {
    const timer = setTimeout(() => setHydrated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!hydrated) {
    return <Loader message="Preparing booking page..." />;
  }

  const next = () => setCurrent((c) => Math.min(c + 1, steps.length - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const restart = () => {
    reset();
    setCurrent(0);
  };

  const { component: StepComponent } = steps[current];

  return (
    <div className="space-y-6">
      <Steps current={current} items={steps.map((s) => ({ title: s.title }))} />

      <div className="mt-4">
        <StepComponent onNext={next} onPrev={prev} onRestart={restart} />
      </div>
    </div>
  );
}
