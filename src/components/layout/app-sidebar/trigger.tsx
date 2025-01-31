"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function Trigger() {
  const { state, isMobile } = useSidebar();

  return (
    <SidebarTrigger
      className={cn(
        !isMobile &&
          "absolute right-0 top-7 translate-x-1/2 transition-transform",
        state === "collapsed" && "translate-x-full",
      )}
    />
  );
}
