<template>
  <base-layout>
    <template #header>
      <vb-button @click="moveToWritePage">Write</vb-button>
    </template>

    <h1 class="header">Popular articles</h1>

    <div class="blog-container">
      <div v-for="blog in blogs" :key="blog.id" class="blog">
        <router-link :to="`/blogs/${blog.id}`" style="text-decoration: none; color: inherit">
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
import BaseLayout from '@/layouts/BaseLayout.vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const blogs: Blog[] = [
  {
    id: 1,
    title: 'How I became a singer',
    content:
      "When I was young, I sang a lot. I sang in the shower, I sang in the car, I sang in the school choir. I sang everywhere. And then one day, I decided to become a singer. And that's how I became a singer.",
    owner: {
      id: 1,
      name: 'Michael Jackson'
    }
  },
  {
    id: 2,
    title: 'The first time I performed on stage',
    content:
      'Stepping on stage for the first time was nerve-wracking. But as soon as I started singing, all my fears melted away. I felt like I was born to be on stage. And that was the beginning of my career as a singer. Who knew that one performance would change my life forever? I certainly didn’t. But I’m glad it did. And I’m grateful for every moment I get to spend on stage. It’s where I belong. It’s where I feel alive. It’s where I’m truly me. And I wouldn’t have it any other way. I’m a singer. And I’m proud of it.',
    owner: {
      id: 2,
      name: 'Madonna'
    }
  }
]

const moveToWritePage = () => {
  router.push({ name: 'write-blog' })
}
</script>
