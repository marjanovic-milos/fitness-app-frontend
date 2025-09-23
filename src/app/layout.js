"use client";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../i18n";
import CoreLayout from "src/components/CoreLayout/CoreLayout";

import { ThemeProvider } from "src/context/theme";
import { ModalProvider } from "src/context/modal";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { AppErrorBoundary } from "src/components/AppError/AppErrorBoundary";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const toasterOptions = {
  position: "bottom-left",
  containerStyle: {
    bottom: 80,
    left: 20,
  },
  toastOptions: {
    style: {
      background: "#333",
      color: "#fff",
      height: 90,
      borderRadius: "12px",
      padding: "16px",
    },
    error: {
      style: {
        borderLeft: "5px solid red",
      },
    },
    success: {
      style: {
        borderLeft: "5px solid green",
      },
    },
  },
};

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en" className={`${roboto.className}`}>
      <body className={`root-layout`}>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <ThemeProvider>
              <CoreLayout>
                <Toaster {...toasterOptions} />
                <AppErrorBoundary>{children}</AppErrorBoundary>
              </CoreLayout>
            </ThemeProvider>
          </ModalProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
