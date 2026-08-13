import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Кофе и Чай",
  description: "Кофе и чай, представленные по категориям.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-50">
        {children}
      </body>
    </html>
  );
}
