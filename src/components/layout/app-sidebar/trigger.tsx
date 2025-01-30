"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function Trigger() {
  const { state } = useSidebar();

  return (
    <SidebarTrigger
      className={cn(
        "absolute right-0 top-7 translate-x-1/2 transition-transform",
        state === "collapsed" && "translate-x-full",
      )}
    />
  );
}
