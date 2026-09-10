import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

/* Stand-in for PP Neue Montreal, which is a paid Pangram Pangram licence.
   Same geometric humanist shape, same tolerance for tight negative
   tracking at display sizes. Swap the family in globals.css when the
   licence is bought; nothing else in the system changes. */
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Slowburn — AI growth system for solo founders",
  description:
    "One operating loop for attention, capture, and follow-up. Learns how you write, runs on your own material, takes about an hour a day.",
  openGraph: {
    title: "Slowburn — AI growth system for solo founders",
    description:
      "One operating loop for attention, capture, and follow-up. About an hour a day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={interTight.variable}>
      <body>{children}</body>
    </html>
  );
}
