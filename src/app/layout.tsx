import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/TopNav";



export const metadata = {
  title: "T3 Gallery",
  description: "Created by following Theos tutorial",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} `}>
        <body className="flex-col gap-4 flex">      <TopNav />
          {children}</body>
      </html>
    </ClerkProvider>

  );
}
