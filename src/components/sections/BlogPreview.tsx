import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { RevealItem } from "@/components/ui/RevealItem";

const ARTICLES = [
  { slug: "achat-immobilier-etapes-cles", category: "Droit immobilier", date: "12 août 2025", title: "Achat immobilier : les étapes clés chez le notaire", excerpt: "Comprendre le rôle du notaire dans une transaction immobilière, de la promesse d'achat à la publication de l'acte.", image: "/images/blog1.jpg" },
  { slug: "testament-notarie-pourquoi", category: "Testaments", date: "3 juillet 2025", title: "Pourquoi opter pour un testament notarié ?", excerpt: "Les avantages du testament notarié par rapport aux autres formes de testament reconnues au Québec.", image: "/images/blog2.jpg" },
  { slug: "mandat-de-protection-guide", category: "Mandats de protection", date: "19 juin 2025", title: "Mandat de protection : un guide pour bien se préparer", excerpt: "Ce qu'il faut savoir avant de rédiger un mandat en prévision de l'inaptitude, pour vous et vos proches.", image: "/images/blog3.jpg" },
];

export function BlogPreview() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-32">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-body font-medium tracking-[0.2em] uppercase text-gold mb-6">
                <span className="w-8 h-px bg-gold" />
                Actualités
              </span>
              <h2 className="font-heading font-semibold text-navy leading-[1.1] tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                Nos derniers articles
              </h2>
            </div>
            <Button href="/blog" variant="outline" className="w-fit hidden sm:inline-flex">
              Voir tous les articles
              <ArrowRight size={16} />
            </Button>
          </div>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {ARTICLES.map((article) => (
            <RevealItem key={article.slug}>
              <Link href={`/blog/${article.slug}`} className="group block">
                <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-neutral-200">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-center gap-3 text-xs text-neutral-500">
                  <span className="text-gold font-medium tracking-wide uppercase">
                    {article.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-neutral-300" />
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-3 font-heading font-medium text-navy text-lg lg:text-xl leading-snug flex items-start justify-between gap-3">
                  {article.title}
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 mt-1 text-navy/0 group-hover:text-gold transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <Button href="/blog" variant="outline" className="w-full mt-10 sm:hidden">
          Voir tous les articles
          <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}