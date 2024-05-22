<template>
  <div
    v-for="(paragraph, i) in paragraphs"
    :key="i"
    :data-placeholder="$t('blog.content.placeholder')"
    class="blog-content"
    contenteditable="true"
    v-text="paragraph"
    @input="paragraphs[i] = ($event?.target as HTMLDivElement).innerText"
    @keypress.enter="createNewParagraph(i)"
  ></div>
</template>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';

div.blog-content {
  width: 100%;
  height: calc($blog-content-font-size * 1.5);

  padding: 10px;

  color: $text-color;
  font-size: $blog-content-font-size;

  white-space: pre;
}

div[contenteditable='true']:empty:before {
  content: attr(data-placeholder);
  color: $placeholder-color;
  cursor: text;
}
</style>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const model = defineModel()
let paragraphs = ref<string[]>([''])

const createNewParagraph = (index: number) => {
  paragraphs.value = [
    ...paragraphs.value.slice(0, index + 1),
    '',
    ...paragraphs.value.slice(index + 1)
  ]

  setTimeout(() => {
    const newParagraphIndex = index + 1
    const newParagraph = document.querySelectorAll('.blog-content')[newParagraphIndex] as
      | HTMLDivElement
      | undefined
    newParagraph?.focus()
  }, 50)
}

watchEffect(() => {
  model.value = paragraphs.value.join('\n')
})
</script>
