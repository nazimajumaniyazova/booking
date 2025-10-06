"use client";
import { Button, Card } from "antd";

export default function HomePage() {
  return (
    <main className="max-w-xl mx-auto py-16 px-4">
      <Card className="shadow-sm">
        <h1 className="text-2xl font-semibold">Consultation Booking</h1>

        <a href="/booking">
          <Button type="primary" className="mt-6">
            Start Booking
          </Button>
        </a>
      </Card>
    </main>
  );
}
