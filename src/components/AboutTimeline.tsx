import { GraduationCap, Award, Lightbulb, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE, SKILL_CATEGORIES } from '../data/portfolioData';

export function AboutTimeline() {
  return (
    <div className="space-y-24 py-16">
      {/* 1. SEÇÃO SOBRE MIM */}
      <section id="sobre" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#3B82F6] block mb-2">
                01 · Perfil
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Sobre mim
              </h2>
            </div>

            {/* Right Narrative & Highlights */}
            <div className="lg:col-span-8 space-y-6 text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
              <p>
                Sou graduando em <strong className="text-white font-semibold">Sistemas de Informação</strong> pela Universidade Federal de Viçosa (UFV). Desde o início dos meus estudos, adoto uma abordagem pragmática: aprender construindo soluções reais que unem lógica sólida, arquitetura limpa e design centrado no usuário.
              </p>
              <p>
                Transito com facilidade entre o desenvolvimento front-end com JavaScript, TypeScript e CSS moderno, algoritmos em C e Python, e ecossistemas contemporâneos de banco de dados como Supabase e PostgreSQL. Pratico a integração de design, código e visão de negócios — desde projetos de empreendedorismo até pipelines de visão computacional.
              </p>
              <p className="text-[#71717A] text-base">
                Fora do ambiente de código, acompanho tendências de inteligência artificial, cultura pop, design de produtos digitais e música boa.
              </p>

              {/* Clean Unboxed Metadata Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#D4D4D8] font-mono border-t border-[#27272A]">
                <div className="flex items-center gap-2">
                  <span className="text-[#3B82F6]">Localização:</span>
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <span className="text-[#3F3F46]">/</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#3B82F6]">Status:</span>
                  <span>{PERSONAL_INFO.status}</span>
                </div>
                <span className="text-[#3F3F46]">/</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#3B82F6]">Idioma:</span>
                  <span>{PERSONAL_INFO.englishLevel}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FORMAÇÃO E TRAJETÓRIA */}
      <section id="trajetoria" className="scroll-mt-24 border-t border-[#27272A] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#3B82F6] block mb-2">
                02 · Percurso Acadêmico
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Formação e trajetória
              </h2>
              <p className="text-sm text-[#A1A1AA] max-w-sm">
                Uma síntese da minha evolução acadêmica, certificações técnicas e primeiras iniciativas práticas em projetos.
              </p>
            </div>

            {/* Timeline Stream */}
            <div className="lg:col-span-8">
              <div className="relative border-l border-[#27272A] pl-6 sm:pl-8 space-y-10 ml-2">
                {TIMELINE.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node Marker */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#18181B] border-2 border-[#2563EB] group-hover:border-[#60A5FA] group-hover:scale-125 transition-all" />

                    <div className="bg-[#151518] border border-[#27272A] group-hover:border-[#3F3F46] rounded-xl p-5 sm:p-6 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono text-[#3B82F6] font-medium">
                          {item.year}
                        </span>
                        {item.badge && (
                          <span className="text-[11px] font-mono text-[#A1A1AA] px-2 py-0.5 rounded bg-[#27272A]">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-[#93C5FD] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-[#A1A1AA] mb-3">
                        {item.institution}
                      </p>

                      <p className="text-sm text-[#71717A] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HABILIDADES TÉCNICAS */}
      <section id="habilidades" className="scroll-mt-24 border-t border-[#27272A] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#3B82F6] block mb-2">
              03 · Stack & Ferramentas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Habilidades e competências
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl">
              Conjunto de tecnologias, linguagens e práticas que utilizo no desenvolvimento de software, automações e projetos acadêmicos.
            </p>
          </div>

          {/* Categorized Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bg-[#151518] border border-[#27272A] rounded-xl p-6 hover:border-[#3F3F46] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#27272A]">
                    {idx === 0 && <GraduationCap className="w-4 h-4 text-[#3B82F6]" />}
                    {idx === 1 && <Lightbulb className="w-4 h-4 text-[#3B82F6]" />}
                    {idx === 2 && <Award className="w-4 h-4 text-[#3B82F6]" />}
                    {idx === 3 && <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />}
                    <h3 className="text-sm font-semibold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-baseline justify-between text-xs">
                        <span className="text-[#E4E4E7] font-medium">{skill.name}</span>
                        {skill.level && (
                          <span className="text-[#71717A] font-mono text-[11px]">
                            {skill.level}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
