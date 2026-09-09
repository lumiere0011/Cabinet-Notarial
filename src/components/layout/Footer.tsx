import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const SITE_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "L'Équipe", href: "/equipe" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Droit immobilier", href: "/services#immobilier" },
  { label: "Testaments et mandats", href: "/services#testaments" },
  { label: "Successions", href: "/services#successions" },
  { label: "Droit corporatif", href: "/services#corporatif" },
  { label: "Célébration de mariages", href: "/services#mariages" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
  label: "Instagram",
  href: "#",
  svg: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
},
];

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 lg:pt-24 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Bloc identité */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="font-heading font-semibold text-xl text-ivory tracking-tight"
            >
              Cabinet<span className="text-gold">.</span>
            </Link>
            <p className="mt-5 text-sm text-ivory/60 leading-relaxed max-w-xs">
              Un accompagnement juridique rigoureux et humain pour vos actes
              de vie les plus importants.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map((social) => (

                <a key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-sm border border-ivory/15 flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold transition-colors duration-300"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xs font-body font-medium tracking-[0.2em] uppercase text-ivory/40 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-body font-medium tracking-[0.2em] uppercase text-ivory/40 mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-body font-medium tracking-[0.2em] uppercase text-ivory/40 mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-ivory/70">
                <MapPin size={16} strokeWidth={1.5} className="text-gold mt-0.5 shrink-0" />
                123 Rue Saint-Jacques, Montréal, QC
              </li>
              <li className="flex items-center gap-3 text-sm text-ivory/70">
                <Phone size={16} strokeWidth={1.5} className="text-gold shrink-0" />
                <a href="tel:+15140000000" className="hover:text-gold transition-colors duration-200">
                  +1 (514) 000-0000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-ivory/70">
                <Mail size={16} strokeWidth={1.5} className="text-gold shrink-0" />
                <a href="mailto:contact@cabinet.ca" className="hover:text-gold transition-colors duration-200">
                  contact@cabinet.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne légale */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">
            © {new Date().getFullYear()} Cabinet Notarial. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="text-xs text-ivory/40 hover:text-gold transition-colors duration-200">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-xs text-ivory/40 hover:text-gold transition-colors duration-200">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}