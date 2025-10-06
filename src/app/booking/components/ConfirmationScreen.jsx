"use client";
import { Card, Button, Result } from "antd";
import { useBookingStore } from "../store/bookingStore";

export default function ConfirmationScreen({ onRestart }) {
  const {
    consultationType,
    service,
    specialist,
    date,
    time,
    payment,
    bookingNumber,
  } = useBookingStore();
  return (
    <Card>
      <Result
        status="success"
        title="Thank you! Your consultation has been successfully booked."
        subTitle={`Booking Number: ${bookingNumber || "—"}`}
        extra={[
          <a key="calendar" href="#">
            <Button>Add to Calendar</Button>
          </a>,
          <a key="view" href="#">
            <Button>View My Bookings</Button>
          </a>,
          <a key="manage" href="#">
            <Button>Cancel or Reschedule</Button>
          </a>,
          <Button key="new" type="primary" onClick={onRestart}>
            Start New Booking
          </Button>,
        ]}
      />
      <div className="bg-gray-50 p-3 rounded text-sm">
        <div>
          <b>Consultation type:</b> {consultationType}
        </div>
        <div>
          <b>Service:</b> {service}
        </div>
        <div>
          <b>Specialist:</b> {specialist?.name}
        </div>
        <div>
          <b>Format:</b> {consultationType}
        </div>
        <div>
          <b>Date/Time:</b> {date ? new Date(date).toDateString() : "—"}{" "}
          {time || ""}
        </div>
        <div>
          <b>Payment:</b> {payment.status === "paid" ? "Paid" : "Unpaid"}
        </div>
      </div>
    </Card>
  );
}
