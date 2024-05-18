<template>
  <div
    class="blog-content"
    name="blog-content"
    contenteditable="true"
    data-placeholder="Type something here..."
    v-text="blogContent"
    @input="blogContent = ($event?.target as HTMLDivElement).innerText"
    @keypress.enter="onNewline"
  ></div>
</template>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';

div.blog-content {
  width: 100%;
  min-height: 300px;

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
const blogContent = defineModel()

const onNewline = (e: KeyboardEvent) => {
  // Move cursor to the next line of the current cursor
}
</script>
