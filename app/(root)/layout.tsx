import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/NavBar";
import { RoutineProvider, EventProvider } from "@/context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
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
    </main>
  );
}
