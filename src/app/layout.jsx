import "./globals.css";

export const metadata = {
  title: "Consultation Booking App",
  description: "Book consultations easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
