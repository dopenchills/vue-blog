<template>
  <BaseLayout>
    <template #header>
      <VbButton>Delete</VbButton>
      <VbButton>Save</VbButton>
      <VbButton>Publish</VbButton>
    </template>
  </BaseLayout>
</template>

<script setup lang="ts">
import VbButton from '@/components/buttons/VbButton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>
