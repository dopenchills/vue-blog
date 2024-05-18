import { reactive } from 'vue'

export function useMockBlogs() {
  const blogs = reactive<Blog[]>([
    {
      id: 1,
      title: 'How I became a singer',
      content:
        "When I was young, I sang a lot. I sang in the shower, I sang in the car, I sang in the school choir. I sang everywhere. And then one day, I decided to become a singer. And that's how I became a singer.",
      owner: {
        id: 1,
        name: 'Michael Jackson'
      }
    },
    {
      id: 2,
      title: 'The first time I performed on stage',
      content:
        'Stepping on stage for the first time was nerve-wracking. But as soon as I started singing, all my fears melted away. I felt like I was born to be on stage. And that was the beginning of my career as a singer. Who knew that one performance would change my life forever? I certainly didn’t. But I’m glad it did. And I’m grateful for every moment I get to spend on stage. It’s where I belong. It’s where I feel alive. It’s where I’m truly me. And I wouldn’t have it any other way. I’m a singer. And I’m proud of it.',
      owner: {
        id: 2,
        name: 'Madonna'
      }
    }
  ])

  const getBlogById = (id: number) => blogs.find((blog) => blog.id === id)

  return { blogs, getBlogById }
}
