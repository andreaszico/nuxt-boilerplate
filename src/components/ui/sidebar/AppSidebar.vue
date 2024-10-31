<template>
  <UISidebar>
    <UISidebarContent>
      <UISidebarGroup>
        <UISidebarGroupLabel>Application</UISidebarGroupLabel>
        <UISidebarGroupContent>
          <UISidebarMenu>
            <UISidebarMenuItem v-for="item in items" :key="item.title">
              <UISidebarMenuButton asChild>
                <a :href="item.url" class="flex items-center space-x-2">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </a>
              </UISidebarMenuButton>
            </UISidebarMenuItem>
          </UISidebarMenu>
        </UISidebarGroupContent>
      </UISidebarGroup>
    </UISidebarContent>
  </UISidebar>
</template>

<script setup lang="ts">
import { Calendar, Home, Inbox, Search, Settings } from "lucide-vue-next";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
</script>
