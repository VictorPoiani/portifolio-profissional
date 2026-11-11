import { useEffect, useRef } from 'react';
import { X, ExternalLink, Github, CheckCircle, Cpu, Target, Layers } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const isOpen = project !== null;

  // onClose chega como arrow function nova a cada render do App; guardamos a
  // versão mais recente em ref para o efeito não ser refeito a cada render.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#151518] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#27272A] bg-[#18181B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#A1A1AA] hover:text-white hover:bg-[#27272A] rounded-lg transition-colors"
            aria-label="Fechar detalhes do projeto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Project Image Banner */}
          {project.image ? (
            <div className="relative aspect-video rounded-xl overflow-hidden border border-[#27272A] bg-[#121214]">
              <img
                src={project.image}
                alt={`Imagem do projeto ${project.title}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-transparent to-transparent opacity-40" />
            </div>
          ) : (
            <div className="aspect-video rounded-xl border border-[#27272A] bg-[#18181B] flex flex-col items-center justify-center text-[#71717A]">
              <Cpu className="w-12 h-12 text-[#2563EB] mb-2" />
              <span className="text-sm font-mono">Arquitetura de Software & Dados</span>
            </div>
          )}

          {/* Title & Tagline */}
          <div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-[#3B82F6]">
              {project.tagline}
            </p>
          </div>

          {/* Overview Summary */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-xl p-4 sm:p-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-2">
              Resumo do Projeto
            </h4>
            <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-[#3B82F6]" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                Tecnologias Utilizadas
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-[#18181B] border border-[#27272A] text-[#E4E4E7]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Objectives */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-[#3B82F6]" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                Objetivos & Finalidade
              </h4>
            </div>
            <ul className="space-y-2">
              {project.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#A1A1AA]">
                  <CheckCircle className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Implementation Details */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-[#3B82F6]" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                Detalhes Técnicos & Engenharia
              </h4>
            </div>
            <ul className="space-y-2.5 bg-[#121214] border border-[#27272A] rounded-xl p-4">
              {project.technicalDetails.map((detail, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed flex items-start gap-2">
                  <span className="text-[#3B82F6] font-mono shrink-0">·</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="px-6 py-4 border-t border-[#27272A] bg-[#18181B] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors shadow-sm shadow-[#2563EB]/25"
              >
                <span>Acessar Projeto</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#E4E4E7] bg-[#151518] hover:bg-[#202024] border border-[#27272A] hover:border-[#3F3F46] rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Ver Repositório GitHub</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
