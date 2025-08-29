import { notFound } from 'next/navigation'
import { getPostsByTag, getAllTags } from '@/lib/blog'
import TagArchive from '@/components/blog/tag-archive'

interface TagPageProps {
  params: Promise<{
    tag: string
  }>
}

export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map(tag => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-')
  }))
}

export async function generateMetadata({ params }: TagPageProps) {
  const resolvedParams = await params;
  const tag = decodeURIComponent(resolvedParams.tag).replace(/-/g, ' ')
  const posts = await getPostsByTag(tag)
  
  if (posts.length === 0) {
    return {
      title: 'Tag Not Found'
    }
  }

  return {
    title: `${tag} - TrailGuide Blog`,
    description: `Articles tagged with "${tag}" - practical insights for nonprofits implementing AI solutions.`,
    openGraph: {
      title: `${tag} - TrailGuide Blog`,
      description: `Articles tagged with "${tag}" - practical insights for nonprofits implementing AI solutions.`,
    },
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const resolvedParams = await params;
  const tag = decodeURIComponent(resolvedParams.tag).replace(/-/g, ' ')
  const posts = await getPostsByTag(tag)
  const allTags = await getAllTags()

  if (posts.length === 0) {
    notFound()
  }

  return <TagArchive tag={tag} posts={posts} allTags={allTags} />
}
