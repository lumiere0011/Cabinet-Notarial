import Image from "next/image";
import { ShieldCheck, Scale, HandHeart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Rigueur juridique",
    description:
      "Chaque acte est préparé avec une précision absolue, dans le respect strict du cadre légal.",
  },
  {
    icon: Scale,
    title: "Impartialité",
    description:
      "En tant qu'officiers publics, nous garantissons neutralité et équité à toutes les parties.",
  },
  {
    icon: HandHeart,
    title: "Proximité humaine",
    description:
      "Au-delà du droit, un accompagnement à l'écoute, à chaque étape de votre projet de vie.",
  },
];

export function About() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Image */}
          <div className="lg:col-span-5 lg:col-start-1 relative">
            <Reveal>
              <div className="relative aspect-[4/5] rounded-md overflow-hidden bg-neutral-200">
                <Image
                  src="/images/image2.jpg"
                  alt="Notaires du cabinet en réunion"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="absolute -bottom-8 -right-6 lg:-right-10 bg-navy text-ivory rounded-md px-7 py-6 shadow-card max-w-[220px]">
                <p className="font-heading font-semibold text-3xl">20+</p>
                <p className="mt-1 text-xs text-ivory/70 leading-relaxed">
                  années au service de nos clients
                </p>
              </div>
            </Reveal>
          </div>

          {/* Texte */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <span className="inline-flex items-center gap-2 text-xs font-body font-medium tracking-[0.2em] uppercase text-gold mb-6">
                <span className="w-8 h-px bg-gold" />
                Qui sommes-nous
              </span>

              <h2 className="font-heading font-semibold text-navy leading-[1.1] tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                Un cabinet notarial à taille humaine, exigeant sur chaque détail.
              </h2>

              <p className="mt-6 text-neutral-600 text-base lg:text-lg leading-relaxed max-w-lg">
                Depuis plus de 20 ans, notre cabinet accompagne particuliers et
                entreprises dans leurs démarches juridiques les plus décisives.
                Nous conjuguons expertise technique et sens du service pour
                vous garantir sérénité et sécurité à chaque étape.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-1 gap-6">
              {POINTS.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Reveal key={point.title} delay={0.15 + index * 0.1}>
                    <div className="flex gap-4">
                      <div className="shrink-0 w-11 h-11 rounded-sm border border-gold/30 flex items-center justify-center">
                        <Icon size={20} className="text-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-heading font-medium text-navy text-base">
                          {point.title}
                        </h3>
                        <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}