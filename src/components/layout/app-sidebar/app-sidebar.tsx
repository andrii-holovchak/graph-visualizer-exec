import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Navigation } from "@/components/layout/app-sidebar/navigation";
import { Settings } from "@/components/layout/app-sidebar/settings";
import { User } from "@/components/layout/app-sidebar/user";
import { Trigger } from "@/components/layout/app-sidebar/trigger";

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <Navigation />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Settings />
        <SidebarSeparator />
        <User />
      </SidebarFooter>
    </Sidebar>
  );
}
