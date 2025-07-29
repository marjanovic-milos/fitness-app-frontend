"use client";
import "./globals.css";
import "../i18n";
import CoreLayout from "src/components/CoreLayout/CoreLayout";
import { ThemeProvider } from "../context/theme";

import { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang='en'>
      <body className={`root-layout`}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <CoreLayout>{children}</CoreLayout>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
