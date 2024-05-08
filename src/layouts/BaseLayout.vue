<template>
  <header>
    <a href="/" class="header-logo">
      <img class="header-logo-image" src="@/assets/image/logo.png" alt="logo" />
      <div class="header-logo-text">MyBlog</div>
    </a>
    <div>
      <slot name="header" class="header-menus"></slot>
    </div>
  </header>
  <main><slot></slot></main>
</template>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';
$header-height: 60px;

header {
  display: flex;
  justify-content: space-between;
  align-items: bottom;
  padding: 5px;
  margin: 5px;
  height: $header-height;
  border-bottom: $border-color 1px solid;
}

.header-logo {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 100%;

  // remove styles from a tag
  text-decoration: none;
  color: $text-color;

  .header-logo-image {
    height: 100%;
  }

  .header-logo-text {
    font-size: $header-height * 0.6;
    font-weight: bold;
  }
}
</style>

<script setup lang="ts"></script>
