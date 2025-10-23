import { Link } from "react-router-dom";
import { Linkedin, Youtube, Instagram, MapPin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Careers", href: "/careers" },
    { name: "Research", href: "/research" }
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "GDPR", href: "/gdpr" }
  ];

  const complianceLinks = [
    { name: "Cookies & PECR Policy", href: "/cookies" },
    { name: "Accessibility Statement", href: "/accessibility" },
    { name: "Security & Compliance Overview", href: "/security" },
    { name: "Sub-processors Register", href: "/subprocessors" }
  ];

  const quickLinks = [
    { name: "NextDoc UK", href: "https://www.nextdocuk.com", external: true, variant: "nextdoc-uk" },
    { name: "NextDoc India", href: "/nextdoc-india", variant: "nextdoc-india" },
    { name: "NextDoc PG", href: "/nextdoc-pg", variant: "nextdoc-pg" },
    { name: "NextDoc Med", href: "/nextdoc-med", variant: "nextdoc-med" },
    { name: "NextDoc Care", href: "/nextdoc-care", variant: "nextdoc-care" },
    { name: "NextDoc Labs", href: "http://www.nextdocglobal.io", external: true, variant: "nextdoc-labs" },
    { name: "NDG Academy", href: "/academy", variant: "ndg-academy" }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin, label: "Follow us on LinkedIn" },
    { name: "X", href: "https://x.com/nextdocglobal", icon: XIcon, label: "Follow us on X" },
    { name: "YouTube", href: "https://www.youtube.com/channel/UCAu4y02joi0e9WD6pLZSvcA", icon: Youtube, label: "Subscribe to our YouTube channel" },
    { name: "Instagram", href: "#", icon: Instagram, label: "Follow us on Instagram" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-medical-blue via-medical-teal to-teal-600 text-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Quick Links Bar - Horizontal Pills */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-center mb-6">Our Ecosystem</h3>
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <div key={index}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm border-white/50 text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
                    >
                      {link.name}
                    </Badge>
                  </a>
                ) : (
                  <Link to={link.href}>
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm border-white/50 text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
                    >
                      {link.name}
                    </Badge>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Company & Legal (Combined) */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-100 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-sm font-semibold tracking-wider uppercase">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-100 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Compliance */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase">Compliance</h3>

            {/* Policy Notice */}
            <p className="text-xs text-gray-100 italic leading-relaxed pb-2 border-b border-white/10">
              Group-level policies shown below. Individual products maintain separate policies.
            </p>

            <ul className="space-y-2">
              {complianceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-100 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase">Contact Us</h3>
            <div className="space-y-4">
              {/* UK Headquarters */}
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-5 h-5 mt-0.5 text-blue-300 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">UK Headquarters</p>
                    <p className="text-sm text-gray-100">4 Queen's Road</p>
                    <p className="text-sm text-gray-100">Wimbledon, London SW19 8ND</p>
                  </div>
                </div>
                <a
                  href="mailto:info@nextdocglobal.com"
                  className="flex items-center gap-3 text-gray-100 hover:text-white transition-colors duration-200 ml-8"
                >
                  <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                  <span className="text-sm">info@nextdocglobal.com</span>
                </a>
              </div>

              {/* Indian Entity */}
              <div className="pt-3 border-t border-white/10">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-5 h-5 mt-0.5 text-blue-300 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">India Operations</p>
                    <p className="text-sm text-gray-100">Operated by Royash Infra Services Pvt Ltd</p>
                  </div>
                </div>
                <a
                  href="mailto:operations@royashinfraservices.com"
                  className="flex items-center gap-3 text-gray-100 hover:text-white transition-colors duration-200 ml-8"
                >
                  <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                  <span className="text-sm">operations@royashinfraservices.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-100 hover:text-white hover:scale-110 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer Text - Compact */}
        <div className="border-t border-white/10 pt-6 text-center space-y-2">
          <p className="text-gray-200 text-xs italic mb-2">
            Career support only; not clinical decision-support.
          </p>
          <p className="text-gray-200 text-xs mb-3">
            Product-specific policies apply. Refer to individual service websites for complete terms, privacy, and refund policies.
          </p>
          <p className="text-gray-200 text-sm">
            NextDoc Global Ltd • Registered in England & Wales • Company No. 16504223 • ICO Registered
          </p>
          <p className="text-gray-200 text-sm">
            © 2025 NextDoc Global Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;