import ListBlogPage from '@/pages/ListBlogPage.vue'
import WriteBlogPage from '@/pages/WriteBlogPage.vue'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: ListBlogPage },
  { path: '/write', component: WriteBlogPage }
]
