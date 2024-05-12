import ListBlogPage from '@/pages/ListBlogPage.vue'
import WriteBlogPage from '@/pages/WriteBlogPage.vue'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: ListBlogPage, name: 'list-blog' },
  { path: '/write', component: WriteBlogPage, name: 'write-blog' }
]
