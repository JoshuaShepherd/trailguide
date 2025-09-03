import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface BlogPost {
  title: string
  slug: string
  description: string
  coverImage: string
  coverAlt: string
  publishedAt: string
  updatedAt?: string
  author: {
    name: string
    handle: string
    avatar?: string
    role?: string
  }
  tags: string[]
  category: string
  readingTime?: string
  series?: {
    name: string
    part: number
    total?: number
  }
  canonicalUrl?: string
  draft?: boolean
  featured?: boolean
  content: string
}

export interface Author {
  name: string
  handle: string
  avatar?: string
  role?: string
  bio?: string
  social?: {
    twitter?: string
    linkedin?: string
    website?: string
  }
}

const CONTENT_PATH = path.join(process.cwd(), 'content')
const BLOG_PATH = path.join(CONTENT_PATH, 'blog')
const AUTHORS_PATH = path.join(CONTENT_PATH, 'authors')

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(BLOG_PATH)) {
      return []
    }
    
    const filenames = fs.readdirSync(BLOG_PATH)
    const posts = filenames
      .filter(name => name.endsWith('.mdx'))
      .map(filename => getPostBySlug(filename.replace('.mdx', '')))
      .filter((post): post is BlogPost => post !== null && (!post.draft || process.env.NODE_ENV === 'development'))
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    return posts
  } catch (error) {
    console.error('Error getting posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_PATH, `${slug}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Auto-generate reading time if not provided
    const readingTimeResult = readingTime(content)
    
    return {
      title: data.title,
      slug,
      description: data.description,
      coverImage: data.coverImage,
      coverAlt: data.coverAlt,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      author: data.author,
      tags: data.tags || [],
      category: data.category,
      readingTime: data.readingTime || readingTimeResult.text,
      series: data.series,
      canonicalUrl: data.canonicalUrl,
      draft: data.draft || false,
      featured: data.featured || false,
      content,
    }
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error)
    return null
  }
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.featured)
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tagCounts: { [key: string]: number } = {}
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })
  
  return Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  const categories = [...new Set(posts.map(post => post.category))]
  return categories.sort()
}

export function getAuthorByHandle(handle: string): Author | null {
  try {
    const filePath = path.join(AUTHORS_PATH, `${handle}.json`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const author = JSON.parse(fileContents)
    
    return {
      handle,
      ...author
    }
  } catch (error) {
    console.error(`Error getting author ${handle}:`, error)
    return null
  }
}

export async function getPostsByAuthor(handle: string): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.author.handle === handle)
}

// Pagination utilities
export function paginatePosts(posts: BlogPost[], page: number, limit: number = 12) {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  
  return {
    posts: posts.slice(startIndex, endIndex),
    pagination: {
      current: page,
      total: Math.ceil(posts.length / limit),
      hasNext: endIndex < posts.length,
      hasPrev: page > 1
    }
  }
}

// Get all tags with post counts
export async function getTagsWithCounts(): Promise<{ tag: string; count: number }[]> {
  const posts = await getAllPosts()
  const tagCounts = new Map<string, number>()
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1)
    })
  })
  
  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}
