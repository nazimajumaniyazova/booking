export default function BookingLayout({ children }) {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-semibold mb-1 text-blue-600">
        Booking Section
      </h1>
      {children}
    </div>
  );
}
