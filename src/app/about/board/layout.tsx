import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Board & Advisors — TrailGuide',
  description: 'Meet the early board and advisors guiding TrailGuide\'s mission to deliver wise, workable AI for nonprofits.',
  openGraph: {
    title: 'Board & Advisors — TrailGuide',
    description: 'Meet the early board and advisors guiding TrailGuide\'s mission to deliver wise, workable AI for nonprofits.',
    type: 'website',
  },
};

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
