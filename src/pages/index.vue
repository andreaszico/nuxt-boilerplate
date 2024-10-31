<script setup lang="ts">
import { useAuthStore } from "~/stores/auth.store";
import { usePostStore } from "~/stores/post.store";

const postStore = usePostStore();
const authStore = useAuthStore();

const handleGetPost = async () => {
  await postStore.fetchPostList();
};

const handleLogIn = async () => {
  await authStore.signIn();
};
</script>

<template>
  <div>
    <p class="text-4xl">{{ "Hello World" }}</p>
    <div class="flex flex-col items-start">
      <button type="button" @click="handleGetPost">Get Post</button>
      <button type="button" @click="handleLogIn">Login</button>
      <UIButton @click="handleLogIn">Mixing something</UIButton>
    </div>
  </div>
</template>
