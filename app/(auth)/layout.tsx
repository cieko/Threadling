// import modules
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

// style
import "../globals.css";

export const metadata = {
  title: "Threadling",
  description: "Threadling - Cieko App | Meta Threads Clone",
};

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${font.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
