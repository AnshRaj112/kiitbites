import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const sen = Sen({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800",]});

export const metadata: Metadata = {
  title: "KIITBITES",
  description: "Order online from food-courts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang="en">
          <body className={sen.className}>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            {children}
          </body>
        </html>
      </ClerkProvider>
  );
}
