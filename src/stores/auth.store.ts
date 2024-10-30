import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const { $api } = useNuxtApp();

  async function signIn() {
    try {
      const response = await $api.auth.signIn();
      return response;
    } catch (error) {
      console.error("fetchPostList error:", error);
    }
  }

  return { signIn };
});
