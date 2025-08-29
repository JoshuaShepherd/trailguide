import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Voice Assessment - TrailGuide',
  description: 'A 10-minute, live voice interview to map your AI pathway forward.',
  robots: process.env.NEXT_PUBLIC_ALLOW_INDEX === '1' ? 'index,follow' : 'noindex,nofollow',
};

export default function AgentAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
