'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface VideoEmbedProps {
  provider: 'youtube' | 'vimeo' | 'file'
  idOrSrc: string
  title: string
  caption?: string
  poster?: string
  start?: number
}

export function VideoEmbed({ provider, idOrSrc, title, caption, poster, start }: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const getEmbedUrl = () => {
    switch (provider) {
      case 'youtube':
        const startParam = start ? `&start=${start}` : ''
        return `https://www.youtube.com/embed/${idOrSrc}?rel=0${startParam}`
      case 'vimeo':
        return `https://player.vimeo.com/video/${idOrSrc}`
      case 'file':
        return idOrSrc
      default:
        return idOrSrc
    }
  }

  return (
    <div className="my-8">
      <div className="relative rounded-lg overflow-hidden shadow-md bg-gray-100">
        <div className="aspect-video">
          {!isLoaded && poster ? (
            <div 
              className="relative w-full h-full cursor-pointer group"
              onClick={() => setIsLoaded(true)}
            >
              <Image
                src={poster}
                alt={title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all">
                <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-gray-900 ml-1" />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src={getEmbedUrl()}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
      {caption && (
        <p className="mt-3 text-sm text-gray-600 text-center">{caption}</p>
      )}
    </div>
  )
}

interface PodcastEmbedProps {
  provider: 'spotify' | 'apple' | 'rss' | 'file'
  src: string
  title: string
}

export function PodcastEmbed({ provider, src, title }: PodcastEmbedProps) {
  const getEmbedUrl = () => {
    switch (provider) {
      case 'spotify':
        return `https://open.spotify.com/embed/${src}`
      case 'apple':
        return src // Apple doesn't have embeds, would need custom player
      default:
        return src
    }
  }

  return (
    <div className="my-8 p-6 border border-gray-200 rounded-lg bg-gray-50">
      <h4 className="font-medium text-gray-900 mb-4">{title}</h4>
      
      {provider === 'spotify' ? (
        <iframe
          src={getEmbedUrl()}
          width="100%"
          height="232"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded"
        />
      ) : (
        <div className="bg-white rounded p-4 border">
          <p className="text-sm text-gray-600 mb-2">Audio Player</p>
          <audio controls className="w-full">
            <source src={src} />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  )
}

interface GalleryProps {
  items: Array<{
    src: string
    alt: string
    caption?: string
  }>
  variant?: 'masonry' | 'grid'
}

export function Gallery({ items, variant = 'grid' }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % items.length)
    }
  }
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? items.length - 1 : lightboxIndex - 1)
    }
  }

  return (
    <>
      <div className={cn(
        'my-8 gap-4',
        variant === 'grid' 
          ? 'grid grid-cols-2 md:grid-cols-3' 
          : 'columns-2 md:columns-3 space-y-4'
      )}>
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              'cursor-pointer group',
              variant === 'masonry' && 'break-inside-avoid'
            )}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={300}
              height={200}
              className="w-full rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
            />
            {item.caption && (
              <p className="mt-2 text-xs text-gray-600">{item.caption}</p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-4xl max-h-full">
            <Image
              src={items[lightboxIndex].src}
              alt={items[lightboxIndex].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
            {items[lightboxIndex].caption && (
              <p className="text-white text-center mt-4">
                {items[lightboxIndex].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

interface DownloadCardProps {
  title: string
  description: string
  fileUrl: string
  fileType?: string
  sizeLabel?: string
}

export function DownloadCard({ title, description, fileUrl, fileType, sizeLabel }: DownloadCardProps) {
  return (
    <div className="my-6 border border-gray-200 rounded-lg p-6 bg-gray-50">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 bg-trailguide-evergreen rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {fileType?.toUpperCase() || 'FILE'}
          </span>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          <div className="flex items-center gap-3">
            <a
              href={fileUrl}
              download
              className="bg-trailguide-evergreen text-white px-4 py-2 rounded text-sm font-medium hover:bg-trailguide-evergreen/90 transition-colors"
            >
              Download
            </a>
            {sizeLabel && (
              <span className="text-xs text-gray-500">{sizeLabel}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
