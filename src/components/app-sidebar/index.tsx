'use client'

import * as React from "react"
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import NavUser from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {Provider} from './context'
import HeaderBreadcrumb from "./breadcrumb";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Provider>
      <SidebarProvider>
        <Sidebar collapsible="icon" {...props}>
          <SidebarHeader>
            <TeamSwitcher />
          </SidebarHeader>
          <SidebarContent>
            <NavMain />
            <NavProjects />
          </SidebarContent>
          <SidebarFooter>
            <NavUser />
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>

        <SidebarInset>
          <HeaderBreadcrumb />
          {props.children}
        </SidebarInset>
      </SidebarProvider>
    </Provider>
  )
}
