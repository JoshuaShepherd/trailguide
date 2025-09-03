import { notFound } from 'next/navigation'
import { getAuthorByHandle, getPostsByAuthor } from '@/lib/blog'
import AuthorProfile from '@/components/blog/author-profile'

interface AuthorPageProps {
  params: {
    handle: string
  }
}

export async function generateStaticParams() {
  // In a real app, you'd get all authors from your content directory
  return [
    { handle: 'alex-r' },
    { handle: 'k-brisco' }
  ]
}

export async function generateMetadata({ params }: AuthorPageProps) {
  const author = getAuthorByHandle(params.handle)
  
  if (!author) {
    return {
      title: 'Author Not Found'
    }
  }

  return {
    title: `${author.name} - TrailGuide`,
    description: author.bio,
    openGraph: {
      title: `${author.name} - TrailGuide`,
      description: author.bio,
      images: author.avatar ? [author.avatar] : [],
    },
  }
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const author = getAuthorByHandle(params.handle)
  
  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(params.handle)

  return <AuthorProfile author={author} posts={posts} />
}
