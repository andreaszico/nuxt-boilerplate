<template>
  <UISidebarProvider>
    <UISidebarAppSidebar />
    <main>
      <UISidebarTrigger />
      <slot />
    </main>
  </UISidebarProvider>
</template>
