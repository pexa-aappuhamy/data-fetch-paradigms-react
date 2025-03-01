'use client';
import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
    SidebarHeader
  } from "@/components/ui/sidebar";

import { User } from "lucide-react"
import Link from 'next/link';

export const Navigation = () => {
    const items = [
        {
            title: "Profile with useEffect",
            url: "/profile-with-effect",
            icon: User,
        },
        {
            title: "Profile with Suspense",
            url: "/profile-suspense",
            icon: User,
        },
        {
            title: "Profile RSC",
            url: "/profile-rsc",
            icon: User,
        },
    ]
    return (
        <Sidebar>
          <SidebarHeader />
          <SidebarContent>
            <SidebarGroup>
            <SidebarGroupLabel>Data-Fetching Approaches</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {items.map((item) => {
                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                            <Link href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                            </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    )
                })}
                </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
            <SidebarGroupLabel>Theme</SidebarGroupLabel>
            <SidebarGroupContent>
                <ThemeToggle />
            </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter />
        </Sidebar>
    );
}