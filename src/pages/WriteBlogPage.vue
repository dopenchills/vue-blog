<template>
  <base-layout>
    <template #header>
      <vb-button>Delete</vb-button>
      <vb-button>Save</vb-button>
      <vb-button>Publish</vb-button>
    </template>
  </base-layout>
</template>

<script setup lang="ts">
import VbButton from '@/components/buttons/VbButton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>
