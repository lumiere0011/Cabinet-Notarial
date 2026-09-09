import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { RevealItem } from "@/components/ui/RevealItem";

const VALUES = [
  { title: "Rigueur", description: "Chaque dossier est traité avec une attention méticuleuse aux détails. Nous appliquons les plus hauts standards de la profession notariale pour garantir la sécurité juridique de vos transactions." },
  { title: "Proximité", description: "Nous croyons en une relation de confiance avec nos clients. Notre approche personnalisée assure que chaque client reçoit l'attention et l'écoute qu'il mérite." },
  { title: "Intégrité", description: "L'honnêteté et la transparence guident chacune de nos actions. Nous respectons scrupuleusement le Code de déontologie des notaires et les plus hautes normes éthiques." },
];

export function Values() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-32">
        <Reveal>
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-body font-medium tracking-[0.2em] uppercase text-gold mb-6">
              Nos valeurs fondamentales
            </span>
            <h2 className="font-heading font-semibold text-navy leading-[1.1] tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Rigueur. Proximité. Intégrité.
            </h2>
            <span className="mt-6 inline-block w-10 h-px bg-gold" />
          </div>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-3 gap-12 sm:gap-8">
          {VALUES.map((value) => (
            <RevealItem key={value.title} className="text-center">
              <span className="inline-block w-8 h-px bg-gold mb-6" />
              <h3 className="font-heading font-semibold text-navy text-xl lg:text-2xl">
                {value.title}
              </h3>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                {value.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}