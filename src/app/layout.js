import "./globals.css";
import CoreLayout from "./components/CoreLayout/CoreLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`root-layout`}>
        <CoreLayout>{children}</CoreLayout>
      </body>
    </html>
  );
}
