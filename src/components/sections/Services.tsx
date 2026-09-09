import { Home, FileText, Users, Building2, Heart, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { RevealItem } from "@/components/ui/RevealItem";

const SERVICES = [
  { icon: Home, title: "Droit immobilier", description: "Achat, vente, refinancement et hypothèques. Nous vous accompagnons à chaque étape de votre transaction immobilière." },
  { icon: FileText, title: "Testaments et mandats", description: "Rédaction de testaments notariés et de mandats de protection pour assurer la sécurité de vos proches." },
  { icon: Users, title: "Successions", description: "Règlement de successions avec rigueur et empathie, de la vérification testamentaire à la liquidation." },
  { icon: Building2, title: "Droit corporatif", description: "Constitution de sociétés, modifications corporatives, conventions entre actionnaires et suivi annuel." },
  { icon: Heart, title: "Célébration de mariages", description: "Célébration de mariages civils et d'unions civiles dans un cadre chaleureux et personnalisé." },
  { icon: ShieldCheck, title: "Mandats de protection", description: "Préparation de mandats en cas d'inaptitude pour protéger vos intérêts et ceux de votre famille." },
];

export function Services() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-32">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-body font-medium tracking-[0.2em] uppercase text-gold mb-6">
                <span className="w-8 h-px bg-gold" />
                Nos services
              </span>
              <h2 className="font-heading font-semibold text-ivory leading-[1.1] tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                Une expertise complète pour chaque étape de votre vie.
              </h2>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10 rounded-md overflow-hidden">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <RevealItem key={service.title} className="group relative bg-navy hover:bg-navy-light p-8 lg:p-10 transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <span className="w-11 h-11 rounded-sm border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                    <Icon size={20} strokeWidth={1.5} className="text-gold" />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-ivory/0 group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                  />
                </div>
                <h3 className="mt-8 font-heading font-medium text-ivory text-lg lg:text-xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-ivory/60 leading-relaxed">
                  {service.description}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}