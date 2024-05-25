<template>
  <div>
    <div
      v-for="(paragraph, i) in paragraphs"
      :key="i"
      :data-placeholder="$t('blog.content.placeholder')"
      class="blog-content"
      contenteditable="true"
      v-text="paragraph"
      @input="paragraphs[i] = ($event?.target as HTMLDivElement).innerText"
      @keypress.enter="createNewParagraph(i)"
      @keydown.delete="deleteCurrentParagraph(i)"
    ></div>
  </div>
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

  focusParagraph(index + 1)
}

const deleteCurrentParagraph = (index: number) => {
  if (paragraphs.value.length === 1) return
  if (paragraphs.value[index] !== '') return

  paragraphs.value = paragraphs.value.filter((_, i) => i !== index)

  focusParagraph(index - 1)
}

const focusParagraph = (index: number) => {
  setTimeout(() => {
    const paragraph = document.querySelectorAll('.blog-content')[index] as
      | HTMLDivElement
      | undefined
    paragraph?.focus()
  }, 50)
}

watchEffect(() => {
  model.value = paragraphs.value.join('\n')
})
</script>
