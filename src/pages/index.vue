<script setup lang="ts">
import { ref } from 'vue';
const test = ref<Record<string, any>>({});

const handleClick = async () => {
  const { data } = await useFetch('/api/hello');
  if (data.value) {
    test.value = data.value;
  }
}
</script>

<template>
  <div>
    <p class="text-4xl">{{ "Hello World" }}</p>
    <pre>{{ test }}</pre>
    <button type="button" @click="handleClick">Hello</button>
  </div>
</template>
