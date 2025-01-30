"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useMemo } from "react";
import { SettingsIcon, StickyNote } from "lucide-react";

export function Settings() {
  const items = useMemo(
    () => [
      {
        title: "Lorem 1",
        icon: SettingsIcon,
        onClick: () => {
          console.log("settings");
        },
      },
      {
        title: "Lorem 2",
        icon: StickyNote,
        onClick: () => {
          console.log("notes");
        },
      },
    ],
    [],
  );

  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild size="lg">
            <button onChange={item.onClick}>
              <item.icon className="!size-5" stroke="#A3A9B6" />
              <span>{item.title}</span>
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
