<template>
  <base-layout>
    <template #header>
      <vb-button @click="moveToWritePage">Write</vb-button>
    </template>

    <h1 class="header">Popular articles</h1>

    <div class="blog-container">
      <div v-for="blog in blogs" :key="blog.id" class="blog">
        <router-link :to="`/articles/${blog.id}`" style="text-decoration: none; color: inherit">
          <p class="blog-title">{{ blog.title }}</p>
          <p class="blog-content">{{ blog.content }}</p>
          <p class="blog-owner-name">{{ blog.owner.name }}</p>
        </router-link>
      </div>
    </div>
  </base-layout>
</template>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';

.header {
  margin-bottom: 30px;

  font-size: $header-font-size;
}

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

  color: $text-color;

  .blog-title {
    font-size: calc($blog-title-font-size * 0.8);
  }

  .blog-content {
    height: 50px;
    font-size: calc($blog-content-font-size * 0.8);

    overflow: hidden;
  }

  .blog-owner-name {
    font-size: calc($blog-content-font-size * 0.5);
  }
}
</style>

<script setup lang="ts">
import VbButton from '@/components/buttons/VbButton.vue'
import { useMockBlogs } from '@/composables/useMockBlogs'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const { blogs } = useMockBlogs()

const moveToWritePage = () => {
  router.push({ name: 'write-blog' })
}
</script>
