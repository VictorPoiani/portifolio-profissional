import { ArrowRight, Mail, Github, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Academic & Availability Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#A1A1AA] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-[#E4E4E7] font-medium">{PERSONAL_INFO.institution}</span>
              <span className="text-[#52525B]">·</span>
              <span>{PERSONAL_INFO.campus}</span>
            </div>

            {/* Display Headline with Balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 text-balance">
              Desenvolvendo software com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93C5FD] to-[#3B82F6]">
                rigor técnico
              </span>{' '}
              e interfaces de alto impacto.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed mb-8 max-w-2xl">
              Sou estudante de Sistemas de Informação na Universidade Federal de Viçosa (UFV). Crio soluções completas unindo desenvolvimento web moderno, visão computacional e arquitetura de software limpa — transformando problemas reais em produtos digitais funcionais.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-md shadow-[#2563EB]/25 active:scale-95 shrink-0"
              >
                <span>Explorar Projetos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#D4D4D8] bg-[#18181B] hover:text-white hover:bg-[#202024] border border-[#27272A] hover:border-[#3F3F46] rounded-xl transition-colors shrink-0"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors shrink-0"
              >
                <Mail className="w-4 h-4" />
                <span>Currículo & Contato</span>
              </a>
            </div>

            {/* Status Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#71717A] pt-4 border-t border-[#27272A]/70 w-full">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A1A1AA]" />
                <span className="text-[#A1A1AA]">{PERSONAL_INFO.location}</span>
              </div>
              <span className="text-[#3F3F46]">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span className="text-[#E4E4E7] font-medium">{PERSONAL_INFO.status}</span>
              </div>
              <span className="text-[#3F3F46]">·</span>
              <span className="text-[#A1A1AA] font-mono">{PERSONAL_INFO.englishLevel}</span>
            </div>
          </div>

          {/* Right Column: Studio Portrait Card with Subtle Metallic Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle ambient cobalt glow behind card */}
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#2563EB]/20 via-[#1E40AF]/10 to-transparent blur-xl opacity-75"
              />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-[#151518] border border-[#27272A] overflow-hidden p-3 shadow-2xl shadow-black/60">
                {/* Photo frame */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-[#18181B] border border-[#27272A]/80">
                  <img
                    src={PERSONAL_INFO.portrait}
                    alt="Retrato profissional de Victor Poiani"
                    className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500"
                    width={1000}
                    height={1500}
                    decoding="async"
                    fetchPriority="high"
                  />
                  {/* Subtle contrast gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-60" />
                </div>

                {/* Sub-card info bar */}
                <div className="mt-3.5 p-3 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-[#71717A] font-mono">Desenvolvedor de Software</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2563EB]/15 border border-[#2563EB]/30 text-xs font-mono text-[#60A5FA]">
                    <span>UFV 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics & Highlights Strip Below Split */}
        <div className="mt-16 pt-8 border-t border-[#27272A] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {PERSONAL_INFO.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-1">
                {metric.label}
              </span>
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {metric.value}
              </span>
              <span className="text-xs text-[#A1A1AA] mt-0.5">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
