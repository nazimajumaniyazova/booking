"use client";
import { useState } from "react";
import { Card, Radio, Input, Alert } from "antd";
import { useBookingStore } from "../store/bookingStore";
import StepNavigation from "./common/StepNavigation";

export default function PaymentForm({ onNext, onPrev }) {
  const {
    payment,
    setField,
    consultationType,
    service,
    specialist,
    date,
    time,
  } = useBookingStore();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);

    await new Promise((r) => setTimeout(r, 600));

    if (payment.method === "pay_on_visit") {
      setField("payment", { ...payment, status: "unpaid" });
    } else {
      const ok = true;
      if (!ok) {
        setError("Payment unsuccessful. Please try again.");
        setLoading(false);
        return;
      }
      setField("payment", { ...payment, status: "paid" });
    }

    setField("bookingNumber", "BK-" + Math.floor(Math.random() * 1e6));
    setLoading(false);
    onNext();
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-3">Payment</h2>

      <div className="bg-gray-50 p-3 rounded text-sm mb-3">
        <div>
          <b>Consultation type:</b> {consultationType || "—"}
        </div>
        <div>
          <b>Service:</b> {service || "—"}
        </div>
        <div>
          <b>Specialist:</b> {specialist?.name || "—"}
        </div>
        <div>
          <b>Date/Time:</b> {date ? new Date(date).toDateString() : "—"}{" "}
          {time || ""}
        </div>
        <div>
          <b>Total:</b> $50.00
        </div>
      </div>

      <Radio.Group
        value={payment.method}
        onChange={(e) =>
          setField("payment", { ...payment, method: e.target.value })
        }
      >
        <Radio value="visa">Visa</Radio>
        <Radio value="mastercard" className="ml-3">
          MasterCard
        </Radio>
        <Radio value="humo" className="ml-3">
          Humo
        </Radio>
        <Radio value="click" className="ml-3">
          Click
        </Radio>
        <Radio value="pay_on_visit" className="ml-3">
          Pay on Visit
        </Radio>
      </Radio.Group>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        {(payment.method === "visa" || payment.method === "mastercard") && (
          <>
            <Input placeholder="Card number" />
            <Input placeholder="MM/YY" />
            <Input placeholder="CVV" />
            <Input placeholder="Cardholder name" className="md:col-span-2" />
          </>
        )}

        {payment.method === "humo" && (
          <Input placeholder="Humo account" className="md:col-span-2" />
        )}
        {payment.method === "click" && (
          <Input placeholder="Click ID / phone" className="md:col-span-2" />
        )}
        {payment.method === "pay_on_visit" && (
          <Alert
            message="You chose to pay on visit. Please bring your payment method with you."
            type="info"
            showIcon
            className="md:col-span-2"
          />
        )}
      </div>

      {error && <Alert type="error" message={error} className="mt-3" />}

      <StepNavigation
        onPrev={onPrev}
        onNext={submit}
        nextDisabled={!payment.method || loading}
        loading={loading}
        nextLabel={
          payment.method === "pay_on_visit"
            ? "Confirm Booking"
            : "Pay & Continue"
        }
      />
    </Card>
  );
}
