import { getAllPosts, paginatePosts, getAllTags, getFeaturedPosts } from '@/lib/blog'
import BlogArchive from '@/components/blog/blog-archive'

export const metadata = {
  title: 'Insights & Field Notes - TrailGuide',
  description: 'Practical, ethical, quietly premium thinking at the intersection of AI and the nonprofit world.',
}

export default async function BlogPage() {
  const allPosts = await getAllPosts()
  const tags = await getAllTags()
  const featuredPosts = await getFeaturedPosts()
  
  const { posts, pagination } = paginatePosts(allPosts, 1, 12)

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <BlogArchive 
          posts={posts}
          featuredPosts={featuredPosts}
          tags={tags}
          pagination={pagination}
        />
      </div>
    </div>
  )
}
