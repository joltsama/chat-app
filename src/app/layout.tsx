import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App",
  description: "Chat with Threads",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-full">
          {/* <div className="fixed left-0 w-80"></div>
          <div className="pl-80 h-full"></div> */}
          {children}
        </main>
      </body>
    </html>
  );
}
