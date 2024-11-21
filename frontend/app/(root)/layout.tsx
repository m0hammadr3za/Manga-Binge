import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "../_styles/globals.scss";
import { ThemeProvider } from "../_context/ThemeContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mangabinge",
  description: "Read Manga Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
