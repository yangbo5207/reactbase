import { ChevronRight } from "lucide-react"
import {Collapsible, CollapsibleContent, CollapsibleTrigger,} from "@/components/ui/collapsible"
import {SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,} from "@/components/ui/sidebar"
import ActiveLink from '@/components/active-link'

import {useStore} from '@/components/app-sidebar/context'

export function NavMain() {
  const {currentNavigation, switchNavigationActive, setCurrentRouter} = useStore()
  function __collapsibleHandler(i: number) {
    switchNavigationActive(i)
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {currentNavigation.map((item, i) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
            onClick={() => __collapsibleHandler(i)}
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <ActiveLink href={subItem.url} onClick={() => setCurrentRouter(subItem)}>
                          <span>{subItem.title}</span>
                        </ActiveLink>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
