<template>
  <base-layout>
    <template #header>
      <vb-button @click="leavePage">Delete</vb-button>
      <vb-button @click="saveBlog" :class="{ disabled: isContentEmpty }" :disabled="isContentEmpty"
        >Save</vb-button
      >
      <vb-button
        @click="publishBlog"
        :class="{ disabled: isContentEmpty }"
        :disabled="isContentEmpty"
        >Publish</vb-button
      >
    </template>

    <input
      class="blog-title"
      type="text"
      name="blog-title"
      placeholder="Title"
      v-model="blogTitle"
      ref="blogTitleInput"
    />
    <div class="vertical-space"></div>
    <blog-content
      v-model="blogContent"
      @inappropriate-words="
        (words) => {
          console.log(`inappropriate words: ${words}`)
        }
      "
    />
    <div class="vertical-space"></div>
    <div>Character count: {{ characterCount }}</div>
    <div class="modal" v-if="showModal">
      <div class="modal-dialog">
        <p>Are you sure you publish the blog right now?</p>
        <vb-button @click="showModal = false">Cancel</vb-button>
        <vb-button @click="showModal = false" color="white" background-color="green"
          >Publish</vb-button
        >
      </div>
    </div>
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

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  .modal-dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 20px;
    transform: translate(-50%, -50%);

    background-color: white;
  }
}
</style>

<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

import VbButton from '@/components/buttons/VbButton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'

import BlogContent from '@/components/write-blog/BlogContent.vue'

import { useMockBlogs } from '@/composables/useMockBlogs'

const router = useRouter()
const { saveArticleDraft } = useMockBlogs()

// Get user information
const user: User = {
  id: 0,
  name: 'John Doe'
}

// Get title and content of the blog
const blogTitle = ref('')
const blogContent = ref('')
const blogId = Math.ceil(Math.random() * 100000)
const showModal = ref(false)

const blogTitleInput = ref<HTMLInputElement | null>(null)

onMounted(() => {
  blogTitleInput.value?.focus()
})

// Handler for delete, save, and publish buttons
const saveBlog = () => {
  const blog: Blog = {
    id: blogId,
    title: blogTitle.value,
    content: blogContent.value,
    owner: user
  }
  saveArticleDraft(blog)
}

const leavePage = () => {
  const yes = confirm('Are you sure you want to leave this page?')
  if (yes) {
    router.push({ name: 'list-blog' })
  }
}

const publishBlog = () => {
  console.log('Publishing the blog...')
  console.log('blogTitle:', blogTitle.value)
  console.log('blogContent:', blogContent.value)
  showModal.value = true
}

watchEffect(() => {
  if (blogTitle.value.length !== 0 || blogContent.value.length !== 0) {
    saveBlog()
  }
})

const characterCount = computed(() => blogContent.value.length)
const isContentEmpty = computed(() => blogContent.value.length === 0)
</script>
