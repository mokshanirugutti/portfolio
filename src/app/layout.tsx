import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight : ["300","400","500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moksha Nirugutti",
  description: "Moksha Nirugutti Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      
      <body
        className={`${geistSans.variable} ${poppins.variable} antialiased`}
      >
         
          {children}
         
      </body>
    </html>
  );
}
