"use client";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../i18n";
import CoreLayout from "src/components/CoreLayout/CoreLayout";
import { AlertProvider } from "src/context/alert";
import { ThemeProvider } from "src/context/theme";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { AppErrorBoundary } from "src/components/AppError/AppErrorBoundary";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang='en'>
      <body className={`root-layout`}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <CoreLayout>
              <Toaster />
              <AppErrorBoundary>{children}</AppErrorBoundary>
            </CoreLayout>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
