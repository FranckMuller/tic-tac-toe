import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const open_sans = Open_Sans({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["cyrillic"],
  variable: "--font-body-family",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(open_sans.className, "text-slate-900")}>
        {children}
        <div id="modals"></div>
      </body>
    </html>
  );
}
