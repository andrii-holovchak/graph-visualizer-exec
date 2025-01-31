"use client";

import { NAVIGATION_LINKS } from "@/components/layout/app-sidebar/config";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <SidebarMenu>
      {NAVIGATION_LINKS.map((item) => {
        const isActive = pathname === item.url;

        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild size="lg" isActive={isActive}>
              <Link href={item.url}>
                <item.icon
                  className="!size-5"
                  stroke={isActive ? "#000" : "#A3A9B6"}
                />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
