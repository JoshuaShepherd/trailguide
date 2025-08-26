import { NewsletterSignup } from '@/components/newsletter-signup'

export function NewsletterSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <NewsletterSignup
            title="Stay Connected to the Trail"
            description="Get the latest insights on responsible AI implementation, new resources, and community updates delivered to your inbox."
          />
        </div>
      </div>
    </section>
  )
}
