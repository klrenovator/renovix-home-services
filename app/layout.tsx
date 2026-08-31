import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renovix Home Services",
  description:
    "Home Renovation & Improvement Services in Kuala Lumpur & Selangor",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
