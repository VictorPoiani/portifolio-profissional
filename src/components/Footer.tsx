import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#27272A] bg-[#0E0E10] py-10 text-xs text-[#71717A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div>
            <p className="text-[#A1A1AA]">
              © {currentYear} <strong className="text-white font-medium">{PERSONAL_INFO.name}</strong>. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-[#52525B] mt-0.5">
              Sistemas de Informação · Universidade Federal de Viçosa (UFV)
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[#71717A] hidden md:inline">
              React · TypeScript · Tailwind CSS
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#A1A1AA] hover:text-white transition-colors"
              title="Voltar ao início da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
