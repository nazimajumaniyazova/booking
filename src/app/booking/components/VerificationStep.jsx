"use client";
import { useEffect, useState } from "react";
import { Card, Button, Input, Alert } from "antd";
import { useBookingStore } from "../store/bookingStore";
import StepNavigation from "./common/StepNavigation";

export default function VerificationStep({ onNext, onPrev }) {
  const { user, setField } = useBookingStore();
  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(60);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  const resendCode = () => {
    setSeconds(60);
    setError("");
  };

  const handleNext = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 500));

    if (code === "1234") {
      setField("isVerified", true);
      setError("");
      onNext();
    } else {
      setField("isVerified", false);
      setError("Invalid or expired code. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-3">Verification</h2>
      <p className="text-gray-600 mb-3">
        We’ve sent a 4-digit code to {user.phone || user.email}. Enter it below
        to verify your information.
      </p>
      {error && <Alert type="error" message={error} className="mb-3" />}
      <div className="flex items-center gap-3">
        <Input
          maxLength={4}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="1234"
          className="w-32 text-center"
        />
        <span className="text-gray-500">{seconds}s</span>
        <Button disabled={seconds > 0} onClick={resendCode}>
          Resend code
        </Button>
      </div>

      <StepNavigation
        onPrev={onPrev}
        onNext={handleNext}
        nextDisabled={code.length < 4 || loading}
        loading={loading}
      />
    </Card>
  );
}
