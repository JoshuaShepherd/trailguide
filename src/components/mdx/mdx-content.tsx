import { MDXRemote } from 'next-mdx-remote/rsc'
import { 
  Callout, 
  Note, 
  Quote, 
  CodeBlock, 
  Figure, 
  CardGrid, 
  ButtonLink 
} from '@/components/mdx/basic-components'
import { 
  VideoEmbed, 
  PodcastEmbed, 
  Gallery, 
  DownloadCard 
} from '@/components/mdx/media-components'
import { 
  TableOfContents, 
  Footnote, 
  Footnotes 
} from '@/components/mdx/table-of-contents'
import { TemplateCallout } from '@/components/mdx/TemplateCallout'
import { ClickableImage } from '@/components/mdx/clickable-image'

// Default MDX components
const components = {
  // Custom components
  Callout,
  TemplateCallout,
  Note,
  Quote,
  CodeBlock,
  Figure,
  CardGrid,
  ButtonLink,
  VideoEmbed,
  PodcastEmbed,
  Gallery,
  DownloadCard,
  TableOfContents,
  Footnote,
  Footnotes,
  
  // Override default HTML elements
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 
      className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight" 
      {...props} 
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 
      id={props.children
        ?.toString()
        ?.toLowerCase()
        ?.replace(/[^\w\s-]/g, '')
        ?.replace(/\s+/g, '-')
        ?.replace(/-+/g, '-')
        ?.trim()}
      className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4 leading-tight scroll-mt-8" 
      {...props} 
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 
      id={props.children
        ?.toString()
        ?.toLowerCase()
        ?.replace(/[^\w\s-]/g, '')
        ?.replace(/\s+/g, '-')
        ?.replace(/-+/g, '-')
        ?.trim()}
      className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-3 leading-tight scroll-mt-8" 
      {...props} 
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a 
      className="text-trailguide-evergreen hover:text-trailguide-evergreen/80 underline decoration-trailguide-evergreen/30 hover:decoration-trailguide-evergreen/60 transition-colors" 
      {...props} 
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-trailguide-bronze bg-gray-50 pl-6 py-4 my-6 italic text-gray-700" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm" {...props} />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-gray-50" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <ClickableImage 
      src={typeof props.src === 'string' ? props.src : ''} 
      alt={props.alt || ''} 
      className={props.className || ''}
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-gray-200" {...props} />
  ),
}

interface MDXContentProps {
  content: string
}

export function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote 
        source={content} 
        components={components}
        options={{
          parseFrontmatter: true,
        }}
      />
    </div>
  )
}
