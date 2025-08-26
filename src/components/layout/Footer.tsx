import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const footerLinks = {
  offerings: {
    title: 'Offerings',
    links: [
      { name: 'TrailMap Assessment', href: '/assessment' },
      { name: 'TrailHikes (Cohorts)', href: '/hikes' },
      { name: 'TrailKits (Tools)', href: '/kits' },
      { name: 'Advisory Services', href: '/advisory' },
    ],
  },
  about: {
    title: 'About',
    links: [
      { name: 'Our Mission', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Team & Advisors', href: '/team' },
      { name: 'News & Updates', href: '/news' },
    ],
  },
  ethics: {
    title: 'Ethics',
    links: [
      { name: 'Ethics Framework', href: '/ethics' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Data Practices', href: '/data' },
    ],
  },
  contact: {
    title: 'Contact',
    links: [
      { name: 'Get in Touch', href: '/contact' },
      { name: 'Support', href: '/support' },
      { name: 'Partnerships', href: '/partnerships' },
      { name: 'Media Kit', href: '/media' },
    ],
  },
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/trailguideai', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/trailguide', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/trailguide', icon: Github },
  { name: 'Email', href: 'mailto:hello@trailguide.org', icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-trailguide-neutral text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <span className="text-2xl font-bold">TrailGuide</span>
                <div className="h-2 w-2 rounded-full bg-trailguide-bronze"></div>
              </Link>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Equipping nonprofits with ethical AI tools, training, and guidance 
                for mission-driven impact.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-trailguide-evergreen transition-colors flex items-center justify-center"
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-trailguide-bronze transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal & Entity Info */}
            <div className="text-sm text-gray-300 text-center md:text-left">
              <p className="mb-2">
                © 2025 TrailGuide Foundation. All rights reserved.
              </p>
              <p className="text-xs">
                TrailGuide Foundation (501c3 mission) • TrailGuide Applications (for-profit engine)
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6 text-sm">
              <Link href="/sitemap" className="text-gray-300 hover:text-trailguide-bronze transition-colors">
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-gray-300 hover:text-trailguide-bronze transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
