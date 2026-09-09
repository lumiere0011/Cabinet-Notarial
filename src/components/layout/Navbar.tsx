"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "L'Équipe", href: "/equipe" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out",
        scrolled
          ? "bg-ivory/95 backdrop-blur-sm border-b border-neutral-200 shadow-soft"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link
            href="/"
            className="font-heading font-semibold text-lg lg:text-xl text-navy tracking-tight"
          >
            Cabinet<span className="text-gold">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-body tracking-wide text-navy/80 hover:text-navy transition-colors duration-200 py-1",
                    "after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-gold after:transition-all after:duration-300",
                    isActive
                      ? "text-navy after:w-full"
                      : "after:w-0 hover:after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              Prendre rendez-vous
            </Button>
          </div>

          <button
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-navy p-2 -mr-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 bottom-0 bg-ivory transition-all duration-300 ease-out overflow-hidden",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col px-6 pt-10 gap-6">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={cn(
                "font-heading text-2xl text-navy transition-all duration-300 ease-out",
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-4 w-fit">
            Prendre rendez-vous
          </Button>
        </nav>
      </div>
    </header>
  );
}