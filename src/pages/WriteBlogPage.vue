<template>
  <base-layout>
    <template #header>
      <vb-button>Delete</vb-button>
      <vb-button>Save</vb-button>
      <vb-button>Publish</vb-button>
    </template>

    <input class="blog-title" type="text" name="blog-title" placeholder="Title" />
    <div class="vertical-space"></div>
    <div
      class="blog-content"
      name="blog-content"
      contenteditable="true"
      data-placeholder="Type something here..."
    ></div>
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
import VbButton from '@/components/buttons/VbButton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>
