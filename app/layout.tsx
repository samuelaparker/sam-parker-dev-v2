import { Orbitron } from "next/font/google";

import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  );
}
