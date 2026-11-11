import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, Copy, Check, Send, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copyFailed, setCopyFailed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Timers com cleanup: evitam setState depois de o componente desmontar
  // e evitam que cliques repetidos criem timers concorrentes.
  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(id);
  }, [copied]);

  useEffect(() => {
    if (!copyFailed) return;
    const id = setTimeout(() => setCopyFailed(false), 6000);
    return () => clearTimeout(id);
  }, [copyFailed]);

  useEffect(() => {
    if (!formSubmitted) return;
    const id = setTimeout(() => setFormSubmitted(false), 8000);
    return () => clearTimeout(id);
  }, [formSubmitted]);

  const handleCopyEmail = async () => {
    try {
      // navigator.clipboard só existe em contexto seguro (HTTPS/localhost)
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopyFailed(false);
      setCopied(true);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Compose mailto link so user's client opens with formatted subject and body
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Contato de ${formData.name} via Portfólio`
    )}&body=${encodeURIComponent(
      `Olá Victor,\n\nMeu nome é ${formData.name} (${formData.email}).\n\nMensagem:\n${formData.message}\n`
    )}`;

    window.location.href = mailtoUrl;
    // O formulário NÃO é limpo: se o usuário não tiver cliente de e-mail
    // configurado, nada abre e ele perderia a mensagem digitada.
    setFormSubmitted(true);
  };

  return (
    <section id="contato" className="scroll-mt-24 border-t border-[#27272A] py-20 bg-[#121214]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#3B82F6] block mb-2">
                05 · Conexão & Oportunidades
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Vamos conversar?
              </h2>
              <p className="text-base text-[#A1A1AA] leading-relaxed">
                Estou aberto a oportunidades de estágio, colaborações em projetos de desenvolvimento web, visão computacional ou conversas sobre novas tecnologias.
              </p>
            </div>

            {/* Quick Copy Email Box */}
            <div className="p-5 rounded-2xl bg-[#151518] border border-[#27272A] space-y-3">
              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider">
                E-mail Profissional Direto
              </span>
              <div className="flex items-center justify-between gap-3 bg-[#18181B] border border-[#27272A] rounded-xl px-4 py-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-white truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-[#27272A] hover:bg-[#3F3F46] text-[#E4E4E7] transition-colors shrink-0"
                  title="Copiar e-mail"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {copyFailed && (
              <p role="status" className="-mt-5 text-xs text-amber-400">
                Não foi possível copiar automaticamente. Selecione e copie o e-mail manualmente.
              </p>
            )}

            {/* Social Network Cards */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block">
                Redes & Perfis
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#151518] border border-[#27272A] hover:border-[#3F3F46] hover:bg-[#18181B] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#A1A1AA] group-hover:text-white" />
                    <span className="text-xs font-medium text-[#E4E4E7]">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-white" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#151518] border border-[#27272A] hover:border-[#3F3F46] hover:bg-[#18181B] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#3B82F6]" />
                    <span className="text-xs font-medium text-[#E4E4E7]">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-white" />
                </a>

                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#151518] border border-[#27272A] hover:border-[#3F3F46] hover:bg-[#18181B] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-[#A1A1AA] group-hover:text-pink-400" />
                    <span className="text-xs font-medium text-[#E4E4E7]">Instagram</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-white" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#151518] border border-[#27272A] shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Enviar uma mensagem
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mb-6">
                Preencha o formulário para abrir o seu cliente de e-mail com a mensagem pré-formatada para Victor.
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/40 flex items-center gap-3 text-xs text-[#93C5FD]">
                  <Check className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>
                    Mensagem preparada! Seu aplicativo de e-mail foi acionado. Se nada abriu,
                    copie o e-mail ao lado e envie manualmente — o texto continua no formulário.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-[#A1A1AA] mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ex: Ana Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#18181B] border border-[#27272A] focus:border-[#2563EB] focus:outline-none text-sm text-white placeholder:text-[#52525B] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-[#A1A1AA] mb-1.5">
                      Seu E-mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="seu.email@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#18181B] border border-[#27272A] focus:border-[#2563EB] focus:outline-none text-sm text-white placeholder:text-[#52525B] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-[#A1A1AA] mb-1.5">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Ex: Proposta de estágio / Projeto Web"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#18181B] border border-[#27272A] focus:border-[#2563EB] focus:outline-none text-sm text-white placeholder:text-[#52525B] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#A1A1AA] mb-1.5">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Escreva sua mensagem ou detalhes da oportunidade..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#18181B] border border-[#27272A] focus:border-[#2563EB] focus:outline-none text-sm text-white placeholder:text-[#52525B] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-md shadow-[#2563EB]/25 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Encaminhar Mensagem</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
