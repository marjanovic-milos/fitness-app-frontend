"use client";
import "./globals.css";
import "./i18n";
import CoreLayout from "./components/CoreLayout/CoreLayout";
import { ThemeProvider } from "./context/theme";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`root-layout`}>
        <ThemeProvider>
          <CoreLayout>{children}</CoreLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
