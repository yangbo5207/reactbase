'use client'

import * as React from "react"
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import NavUser from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {Provider} from './context'
import HeaderBreadcrumb from "./breadcrumb";
import {Button} from "@/components/ui/button";
import {Github} from 'lucide-react'

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

          <div className='mt-8 border-t'>
            <footer className='h-16 px-6 flex items-center justify-between max-w-6xl mx-auto'>
              <div>© Copyright 2024 . <a href='https://beian.miit.gov.cn/' target='_blank'>这波能反杀</a> . <a href='https://beian.miit.gov.cn/' target='_blank'>粤ICP备2024222174号</a></div>
              <div>
                <Button variant='outline' size='icon'><Github /></Button>
              </div>
            </footer>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </Provider>
  )
}
