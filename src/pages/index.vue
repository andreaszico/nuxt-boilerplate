<script setup lang="ts">
import { ref, onMounted } from "vue";
import { usePostStore } from "~/stores/post.store";

const test = ref<Record<string, any>>({});
const postStore = usePostStore();

const handleClick = async () => {
  await postStore.fetchPostList(); // Await to ensure postList is updated before logging
};
</script>

<template>
  <div>
    <p class="text-4xl">{{ "Hello World" }}</p>
    <div v-for="(data, index) in postStore.postList">
      <p class="text-red-400">{{ data.title }}</p>
      <p class="text-amber-400">{{ data.body }}</p>
    </div>
    <button type="button" @click="handleClick">Hello</button>
  </div>
</template>
