import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          {/* Colonne texte */}
          <div className="lg:col-span-7 lg:col-start-1">
            <Reveal delay={0.1}>
              <span className="inline-flex items-center gap-2 text-xs font-body font-medium tracking-[0.2em] uppercase text-gold mb-6">
                <span className="w-8 h-px bg-gold" />
                Cabinet Notarial
              </span>
            </Reveal>

            <Reveal delay={0.25}>
              <h1 className="font-heading font-semibold text-navy leading-[1.05] tracking-tight text-[2.5rem] sm:text-6xl lg:text-7xl">
                Votre patrimoine,
                <br />
                en toute confiance.
              </h1>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-6 max-w-md text-neutral-600 text-base lg:text-lg leading-relaxed">
                Un accompagnement juridique rigoureux et humain pour vos actes
                de vie les plus importants — immobilier, famille, succession,
                entreprise.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/contact" size="lg">
                  Prendre rendez-vous
                  <ArrowRight size={18} />
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Découvrir nos services
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Colonne image */}
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.3}>
              <div className="relative aspect-[4/5] rounded-md overflow-hidden bg-neutral-200">
                <Image
                  src="/images/image1.jpg"
                  alt="Notaire du cabinet"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-gold/40 rounded-md -z-10 hidden lg:block" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Ligne stats */}
        <Reveal delay={0.7}>
          <div className="mt-16 lg:mt-24 pt-10 border-t border-neutral-200 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "20+", label: "Années d'expertise" },
              { value: "3 000+", label: "Actes traités" },
              { value: "98%", label: "Clients satisfaits" },
              { value: "4", label: "Domaines de droit" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-semibold text-2xl lg:text-3xl text-navy">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs lg:text-sm text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}