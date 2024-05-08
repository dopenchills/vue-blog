<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';

.button {
  background-color: transparent;
  padding: 0.5em 0.5em;

  border: $border-color 1px solid;
  border-radius: $border-radius;
  cursor: pointer;

  &:hover {
    border: $border-color 3px solid;
    font-weight: bold;
  }
}
</style>
