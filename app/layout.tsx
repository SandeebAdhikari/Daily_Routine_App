import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/NavBar";
import { RoutineProvider, EventProvider } from "@/context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Daily Routine",
  description: "A simple daily routine tracker",
  icons: {
    icon: "/icons/sa-favicon-black.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex ${inter.variable} ${ibmPlexSerif.variable}`}>
        <EventProvider>
          <RoutineProvider>
            <Sidebar side="left" />
            <div className="flex flex-col w-[1040px] mt-10 mx-5">
              <NavBar />
              {children}
            </div>
            <Sidebar side="right" />
          </RoutineProvider>
        </EventProvider>
      </body>
    </html>
  );
}
