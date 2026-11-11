import { useState } from 'react';
import { ArrowUpRight, Github, Sparkles, Code2, Eye, Compass } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const featuredProject = PROJECTS.find((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  const filteredProjects = activeCategory === 'Todos'
    ? otherProjects
    : otherProjects.filter((p) => p.category === activeCategory);

  const showFeaturedInGrid = activeCategory === 'Todos' || featuredProject?.category === activeCategory;

  return (
    <section id="projetos" className="scroll-mt-24 border-t border-[#27272A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#3B82F6] block mb-2">
              04 · Portfólio de Código
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Galeria de Projetos
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl">
              De plataformas web full-stack e visão computacional até metodologias de gamificação e automações em Python.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented Control) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#151518] border border-[#27272A] rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-[#1E1E22]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 1. PROJETO EM DESTAQUE: THE INSIGHT */}
        {showFeaturedInGrid && featuredProject && (
          <div className="mb-14">
            <div className="relative rounded-2xl bg-[#151518] border border-[#27272A] hover:border-[#3F3F46] overflow-hidden transition-all group shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Visual Preview */}
                <div className="lg:col-span-7 relative aspect-video lg:aspect-auto overflow-hidden bg-[#121214] border-b lg:border-b-0 lg:border-r border-[#27272A]">
                  <img
                    src={featuredProject.image}
                    alt={`Preview do ${featuredProject.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-transparent to-transparent opacity-50" />
                  
                  {/* Floating Highlight Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#121214]/90 backdrop-blur-md border border-[#27272A] text-xs font-mono text-[#60A5FA]">
                    <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span>Projeto em Destaque</span>
                  </div>
                </div>

                {/* Content & Actions */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#71717A] mb-3">
                      <span>{featuredProject.category}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#93C5FD] transition-colors">
                      {featuredProject.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-[#3B82F6] mb-4">
                      {featuredProject.tagline}
                    </p>

                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 line-clamp-4">
                      {featuredProject.summary}
                    </p>

                    {/* Tags as clean unboxed typography */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#71717A] font-mono mb-8">
                      {featuredProject.tags.map((tag, idx) => (
                        <span key={idx} className="flex items-center gap-2">
                          <span className="text-[#D4D4D8]">{tag}</span>
                          {idx < featuredProject.tags.length - 1 && <span className="text-[#3F3F46]">·</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 border-t border-[#27272A] flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectProject(featuredProject)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors shadow-sm shadow-[#2563EB]/25 active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver Detalhes Técnicos</span>
                    </button>

                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-[#D4D4D8] bg-[#18181B] hover:text-white hover:bg-[#202024] border border-[#27272A] rounded-lg transition-colors"
                      >
                        <span>Acessar Projeto</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 text-[#A1A1AA] hover:text-white bg-[#18181B] hover:bg-[#202024] border border-[#27272A] rounded-lg transition-colors"
                        title="Ver repositório no GitHub"
                        aria-label="Ver repositório no GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {!showFeaturedInGrid && filteredProjects.length === 0 && (
          <p className="text-sm text-[#71717A] font-mono py-12 text-center">
            Nenhum projeto nesta categoria ainda.
          </p>
        )}

        {/* 2. GRADE DE OUTROS PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-[#151518] border border-[#27272A] hover:border-[#3F3F46] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Cover */}
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver detalhes de ${project.title}`}
                  className="relative aspect-video overflow-hidden bg-[#18181B] border-b border-[#27272A] cursor-pointer"
                  onClick={() => onSelectProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProject(project);
                    }
                  }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Imagem do projeto ${project.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-[#71717A] bg-gradient-to-br from-[#18181B] to-[#121214]">
                      {project.category.includes('IA') ? (
                        <Eye className="w-10 h-10 text-[#3B82F6] mb-2 opacity-80" />
                      ) : project.category.includes('Educação') ? (
                        <Compass className="w-10 h-10 text-[#3B82F6] mb-2 opacity-80" />
                      ) : (
                        <Code2 className="w-10 h-10 text-[#3B82F6] mb-2 opacity-80" />
                      )}
                      <span className="text-xs font-mono text-[#A1A1AA]">{project.category}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-transparent to-transparent opacity-30" />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-mono text-[#71717A] mb-2.5">
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="text-left text-white group-hover:text-[#93C5FD] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </button>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Clean unboxed tags */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#71717A] font-mono mb-4">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="flex items-center gap-2">
                        <span className="text-[#D4D4D8]">{tag}</span>
                        {idx < Math.min(project.tags.length, 4) - 1 && <span className="text-[#3F3F46]">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 border-t border-[#27272A] bg-[#18181B]/40 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold text-[#3B82F6] hover:text-[#93C5FD] transition-colors flex items-center gap-1.5"
                >
                  <span>Ver detalhes técnicos</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-[#71717A] hover:text-white transition-colors"
                      title="Acessar projeto"
                      aria-label={`Acessar ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-[#71717A] hover:text-white transition-colors"
                      title="Ver no GitHub"
                      aria-label={`Ver ${project.title} no GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
