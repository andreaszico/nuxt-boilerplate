import type { IPost } from "#build/shared/domain/post";
import { defineStore } from "pinia";

export const usePostStore = defineStore("post", () => {
  const { $api } = useNuxtApp();
  const postList = ref<IPost[]>([]);

  async function fetchPostList() {
    try {
      const response = await $api.post.fetchAll();
      postList.value = response; // Ensure `response.data` is the correct format
    } catch (error) {
      console.error("fetchPostList error:", error);
    }
  }

  return { postList, fetchPostList };
});
