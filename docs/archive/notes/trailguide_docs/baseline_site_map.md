# Alan Hirsch Digital Publishing Platform — Baseline Site Map

> **Standardized Blueprint for All TrailGuide Thought Leaders**

---

## 0. Root & Global

- `/` **Home**
  - Hero (flagship content + subscribe CTA)
  - Featured posts / series
  - Upcoming events
  - Alan “About” teaser
  - Email capture (newsletter/free membership)
  - Topics/tags cloud
  - Footer: nav, social, legal

- **Global Components**
  - Header (logo, nav, search, auth links)
  - Footer (nav, signup, social, legal)
  - Site-wide search (modal)
  - Announcement bar (launches, events)

---

## 1. Content (Public + Premium)

### 1.1 Posts (blog/articles)
- `/posts` — All posts index
- `/posts/[slug]` — Post detail
  - TipTap content
  - Paywall break (if premium)
  - Related content
  - CTA to upgrade/subscribe

### 1.2 Series (serialized essays)
- `/series` — All series index
- `/series/[slug]` — Series overview
  - Table of contents
  - Progress tracker
- `/series/[seriesSlug]/[episodeSlug]` — Individual episode

### 1.3 Courses (asynchronous)
- `/courses` — All courses
- `/courses/[slug]` — Course landing (video, syllabus, pricing)
- `/courses/[slug]/[lessonSlug]` — Lesson page
  - Video player
  - Notes/resources
  - Progress tracking

### 1.4 Notes (short-form / micro-essays)
- `/notes` — All notes index
- `/notes/[slug]` — Note detail

### 1.5 Topics/Tags
- `/topics` — All topics
- `/topics/[slug]` — Topic hub

---

## 2. Membership, Plans, Paywall

### 2.1 Marketing Pages
- `/join` — Why Join (benefits, perks, social proof)
- `/pricing` — Plans (monthly/annual)

### 2.2 Checkout & Subscriptions
- `/checkout` — Stripe checkout
- `/subscribe/success` — Success page
- `/subscribe/manage` — Stripe customer portal

### 2.3 Paywall
- Metered access (e.g. 3 premium reads free per month)
- Upgrade modals embedded in content

---

## 3. Events

- `/events` — All events (upcoming/past)
- `/events/[slug]` — Event detail
  - Overview, registration (Stripe if paid)
  - Calendar integration
- `/events/[slug]/watch` — Live/replay page (members)

---

## 4. Standard Pages

- `/about` — About Alan (bio, mission, endorsements)
- `/contact` — Contact form
- `/endorsements` — Endorsements/testimonials
- `/press` — Press kit (bio, photos, speaker topics)

---

## 5. Discovery & Conversion

- `/newsletter` — Newsletter archive/signup
- `/start-here` — Curated pathways for new visitors
- `/library` — Unified archive (posts, series, courses, events)
- `/search` — Search results

---

## 6. Member Area (Auth Required)

- `/account` — Account home
  - Profile summary
  - Membership status
  - Quick links
- `/account/profile` — Profile settings
- `/account/notifications` — Notification prefs
- `/account/bookmarks` — Saved items
- `/account/history` — Reading/viewing history
- `/account/downloads` — Purchased downloads
- `/account/invoices` — Invoices/receipts

---

## 7. Authentication & Onboarding

- `/sign-in` — Sign in
- `/sign-up` — Create account
- `/forgot-password` — Reset password
- `/verify-email` — Email verification
- `/onboarding` — New member onboarding
  - Interests/topics
  - Recommended content

---

## 8. Community (Optional)

- `/community` — Community home
- `/community/threads` — Discussions index
- `/community/[slug]` — Thread detail
- `/community/rules` — Guidelines

---

## 9. Store (Optional)

- `/store` — Storefront (books, merch, downloads)
- `/store/[slug]` — Product detail
- `/store/cart` — Cart (if not Stripe-only)

---

## 10. Admin (Role-Gated)

- `/admin` — Dashboard
- `/admin/content` — Manage posts, series, courses
- `/admin/events` — Event creation/management
- `/admin/members` — Membership management
- `/admin/plans` — Plans & pricing sync
- `/admin/marketing` — Landing pages, CTAs
- `/admin/settings` — Site/global settings
- `/admin/analytics` — Stats, engagement, revenue

---

## 11. Legal & System

- `/privacy` — Privacy policy
- `/terms` — Terms of service
- `/cookies` — Cookie policy
- `/licenses` — Licenses/attributions
- `/_/404` — Not found
- `/_/500` — Server error
- `/sitemap.xml`
- `/robots.txt`

---

## 12. Email Templates (Transactional)

- Welcome (free + paid)
- Verify email
- Reset password
- Payment success / invoices
- Renewal reminders
- Failed payment / dunning
- New content alerts
- Event reminders
- Onboarding drip
- Re-engagement

---

## 13. Launch Content Checklist

- Home, About, Contact, Join, Pricing, Newsletter, Start Here
- 4–6 flagship posts (mix free + premium)
- 1 series (≥3 episodes live)
- 1 mini-course (3+ lessons)
- 1 event scheduled
- Notes: cadence of at least 2/week
- Welcome email sequence
- First newsletter within 7 days

---

# Summary

This site map = **baseline best practice publishing platform**.  
Any author onboarded into TrailGuide gets this stack.  
Custom features can be layered on, but these routes/pages represent the “full kit” to support:
- Publishing (posts, series, courses, notes)  
- Engagement (events, newsletter, community)  
- Monetization (Stripe checkout, subscriptions, store)  
- Ownership (auth, account, analytics)  
- Professional presence (about, press, endorsements)