<template>
  <base-layout>
    <template #header>
      <vb-button @click="router.push({ name: 'write-blog' })">Write</vb-button>
    </template>

    <h1>{{ maybeArticle?.title }}</h1>
    <div>{{ maybeArticle?.content }}</div>
    <div>{{ maybeArticle?.owner.name }}</div>
  </base-layout>
</template>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';

input[type='text'].blog-title {
  height: 30px;
  width: 100%;

  padding: 10px 0 0 5px;

  font-size: $blog-title-font-size;
  color: $text-color;

  border: none;
  border-bottom: $border-color 1px solid;

  ::placeholder {
    color: $placeholder-color;
  }
}

.vertical-space {
  height: 50px;
}

div.blog-content {
  width: 100%;
  min-height: 300px;

  padding: 10px;

  color: $text-color;
  font-size: $blog-content-font-size;
}

div[contenteditable='true']:empty:before {
  content: attr(data-placeholder);
  color: $placeholder-color;
  cursor: text;
}
</style>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import VbButton from '@/components/buttons/VbButton.vue'
import { useMockBlogs } from '@/composables/useMockBlogs'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { onMounted, ref } from 'vue'

const router = useRouter()
const maybeArticle = ref<Blog | undefined>(undefined)
const articleId = Number(router.currentRoute.value.params.id)

const { getArticles } = useMockBlogs()

onMounted(() => {
  const article = getArticles().find((article) => article.id === articleId)
  maybeArticle.value = article
})
</script>
