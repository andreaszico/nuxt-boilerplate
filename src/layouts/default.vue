<template>
  <UISidebarProvider>
    <UISidebarAppSidebar />
    <main class="p-3">
      <UISidebarTrigger />
      <slot />
    </main>
  </UISidebarProvider>
</template>
