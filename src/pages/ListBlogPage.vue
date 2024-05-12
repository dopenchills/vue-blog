<template>
  <base-layout>
    <template #header>
      <vb-button @click="moveToWritePage">Write</vb-button>
    </template>

    <div class="blog-container">
      <div v-for="blog in blogs" :key="blog.id" class="blog">
        <router-link :to="`/blogs/${blog.id}`" style="text-decoration: none; color: inherit">
          <h2>{{ blog.title }}</h2>
          <p>{{ blog.content }}</p>
          <p>{{ blog.owner.name }}</p>
        </router-link>
      </div>
    </div>
  </base-layout>
</template>

<style scoped lang="scss">
.blog-container {
  display: flex;
  flex-flow: column;
  gap: 30px;
}

.blog {
  display: flex;
  flex-flow: column;
  gap: 5px;

  width: 100%;
}
</style>

<script setup lang="ts">
import VbButton from '@/components/buttons/VbButton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const blogs: Blog[] = [
  {
    id: 1,
    title: 'Title 1',
    content: 'Content 1',
    owner: {
      id: 1,
      name: 'Owner 1'
    }
  },
  {
    id: 2,
    title: 'Title 2',
    content: 'Content 2',
    owner: {
      id: 2,
      name: 'Owner 2'
    }
  }
]

const moveToWritePage = () => {
  router.push('/write')
}
</script>
