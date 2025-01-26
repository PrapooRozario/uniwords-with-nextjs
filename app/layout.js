import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Uniwords - Class 9 English Word Meanings",
  description: "Complete word meanings and definitions for Class 9 English lessons. Easy to understand translations and explanations of difficult words. Enhance your English vocabulary.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950`}>{children}</body>
    </html>
  );
}
