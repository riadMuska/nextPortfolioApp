"use client";

import '@/app/globals.css';
import { ThemeProvider } from '@/app/ThemeContext';
import ThemeToggle from '@/app/components/ThemeToggle';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}