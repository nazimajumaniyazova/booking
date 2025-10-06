"use client";
import { Spin } from "antd";

export default function Loader({ message = "Loading..." }) {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center space-y-3">
        <Spin size="large" />
        <p className="text-gray-500">{message}</p>
      </div>
    </div>
  );
}
