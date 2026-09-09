import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-20 lg:pb-32">
        <Reveal>
          <div className="grid lg:grid-cols-2 rounded-md overflow-hidden border border-neutral-200">
            <div className="bg-navy px-8 py-14 sm:px-14 sm:py-16 lg:px-16 lg:py-20 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-xs font-body font-medium tracking-[0.2em] uppercase text-gold mb-6">
                <span className="w-8 h-px bg-gold" />
                Consultation initiale
              </span>
              <h2 className="font-heading font-semibold text-ivory leading-[1.1] tracking-tight text-3xl sm:text-4xl lg:text-[2.75rem]">
                Parlons de votre projet, en toute confiance.
              </h2>
              <p className="mt-6 text-ivory/60 text-sm lg:text-base leading-relaxed max-w-sm">
                Notre équipe vous répond sous 24h pour organiser un premier
                échange, sans engagement.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/contact" size="lg">
                  Prendre rendez-vous
                  <ArrowRight size={18} />
                </Button>
              </div>
              <div className="mt-10 pt-8 border-t border-ivory/10 flex items-center gap-3">
                <span className="w-10 h-10 rounded-sm border border-gold/30 flex items-center justify-center shrink-0">
                  <Phone size={16} strokeWidth={1.5} className="text-gold" />
                </span>
                <div>
                  <p className="text-xs text-ivory/40">Ou appelez-nous directement</p>
                  <a href="tel:+15140000000" className="text-sm text-ivory font-medium hover:text-gold transition-colors duration-200">
                    +1 (514) 000-0000
                  </a>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] lg:min-h-0">
              <Image
                src="/images/cta2.jpg"
                alt="Rencontre avec un notaire du cabinet"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent lg:bg-gradient-to-l" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}