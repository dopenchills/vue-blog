<template>
  <div>
    <h1>Profile Page</h1>
    <ProfileComponent />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const ProfileComponent = defineAsyncComponent(() => {
  let counter = 0
  while (counter < 1000000000) {
    counter++
  }

  return import('./AsyncProfile.vue')
})
</script>
