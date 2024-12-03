import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/NavBar";
import { RoutineProvider, EventProvider } from "@/context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
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
    </div>
  );
}
