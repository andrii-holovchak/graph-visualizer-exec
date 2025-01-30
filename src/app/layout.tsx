import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar/app-sidebar";

export const metadata: Metadata = {
  title: "Graph Visualizer",
  description: "Graph Visualizer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <div className="px w-full px-9 py-7">{children}</div>
        </SidebarProvider>
      </body>
    </html>
  );
}
