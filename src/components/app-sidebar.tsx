// import { useState } from 'react';
import {
  ChevronRight,
  // AudioWaveform,
  // BookOpen,
  // Bot,
  // Command,
  // Frame,
  // GalleryVerticalEnd,
  // Map,
  // PieChart,
  // Settings2,
  // SquareTerminal,
} from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  // SidebarGroupAction,
  // SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  // SidebarInput,
  // SidebarInset,
  SidebarMenu,
  // SidebarMenuAction,
  // SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  // SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  // SidebarProvider,
  SidebarRail,
  // SidebarSeparator,
  // SidebarTrigger,
} from "@/components/ui/sidebar"
import { Toggles } from "./mode/Toggles"
import { routes } from "@/routes/configs"

export function AppSidebar() {

  return (
    <Sidebar>
      <SidebarHeader>
        <p className="text-xl">Shadcn-ui Practices</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarMenu>
            {routes.map((route) => (
              <Collapsible key={route.title} asChild className="group/collapsible">
                <SidebarMenuItem>
                  {route.children ? (
                    <>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={route.title}>
                          <span>{route.title}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {route.children.map((childRoute) => (
                            <SidebarMenuSubItem key={childRoute.title}>
                              <SidebarMenuSubButton asChild>
                                <a href={childRoute.url}>{childRoute.title}</a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </>
                  ) : (
                    <SidebarMenuButton asChild tooltip={route.title}>
                      <a href={route.url}>
                        <span>{route.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Toggles />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}