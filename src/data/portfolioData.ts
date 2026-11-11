// Imagens via new URL(..., import.meta.url): o Vite empacota, aplica hash e
// ajusta o caminho no build (funciona em qualquer subcaminho do GitHub Pages).
// Evite strings como "/src/assets/..." — elas NÃO entram no build de produção.
const portraitImg = new URL('../assets/images/victor-portrait.webp', import.meta.url).href;
const insightImg = new URL('../assets/images/insight-project.webp', import.meta.url).href;
const visionImg = new URL('../assets/images/vision-project.webp', import.meta.url).href;
const gamifyImg = new URL('../assets/images/gamify-project.webp', import.meta.url).href;

export interface Project {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  category: 'Full-Stack & Web' | 'IA & Visão Computacional' | 'Educação & Gamificação' | 'Sistemas & Gestão';
  featured?: boolean;
  image?: string;
  tags: string[];
  objectives: string[];
  technicalDetails: string[];
  /** Link do repositório. Omita se o projeto não tem repositório público. */
  githubUrl?: string;
  /** Link do projeto no ar / material publicado. Omita se não existir. */
  liveUrl?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export const PERSONAL_INFO = {
  name: "Victor Poiani",
  role: "Desenvolvedor de Software & Estudante de Sistemas de Informação",
  institution: "Universidade Federal de Viçosa (UFV)",
  campus: "Campus Rio Paranaíba - MG",
  location: "Rio Paranaíba, MG, Brasil",
  email: "dev.victorpoiani@gmail.com",
  github: "https://github.com/VictorPoiani",
  linkedin: "https://www.linkedin.com/in/victor-poiani/",
  instagram: "https://www.instagram.com/dev.victorpoiani/",
  status: "Disponível para Estágio & Projetos",
  englishLevel: "Inglês Intermediário",
  bio: "Estudante de Sistemas de Informação na UFV focado em transformar conceitos computacionais em software funcional, performático e elegante. Combino rigor de programação, princípios de arquitetura limpa e sensibilidade de design de interface para construir aplicações web e soluções inteligentes.",
  portrait: portraitImg,
  metrics: [
    { label: "Graduação", value: "Sistemas de Informação", detail: "UFV - em andamento" },
    { label: "Projetos Reais", value: "10+", detail: "Web, IA & Sistemas" },
    { label: "Linguagens Core", value: "JS / TS / Python / C", detail: "Frontend & Backend" },
    { label: "Metodologia", value: "Prática & Focada", detail: "Resolução de problemas" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "insight-app",
    title: "The Insight - Ideias em foco",
    tagline: "Plataforma de microblogging e rede social minimalista com arquitetura cloud moderna",
    category: "Full-Stack & Web",
    featured: true,
    image: insightImg,
    tags: ["JavaScript Vanilla", "Supabase", "PostgreSQL", "Row Level Security", "UI/UX", "Mobile-First"],
    summary: "O Insight é uma plataforma de microblogging e rede social minimalista, projetada para quem valoriza a clareza no compartilhamento de pensamentos, artigos e ideias. Com uma interface moderna e intuitiva, o projeto prioriza o conteúdo e a experiência do usuário, oferecendo um espaço limpo, personalizável e sem distrações visuais.",
    objectives: [
      "Criar uma rede social focada na essência das ideias, livre de poluição visual e de algoritmos exaustivos.",
      "Construir do zero um ecossistema leve, transparente e com carregamento instantâneo sem depender de frameworks pesados.",
      "Garantir conformidade com privacidade de dados e isolamento seguro por usuário através de políticas RLS em PostgreSQL."
    ],
    technicalDetails: [
      "Frontend & UI: HTML5 semântico, CSS3 modular (Mobile-First, CSS Grid/Flexbox) com suporte nativo a temas (Dark/Light) e estilização com CSS Custom Properties.",
      "Lógica e Interatividade: JavaScript Vanilla (ES6+) assíncrono (async/await, Fetch API) sem dependências externas, garantindo tempo de resposta ultrarrápido.",
      "Backend & Banco de Dados (BaaS): Integração com Supabase (PostgreSQL em nuvem) para autenticação segura, banco relacional e persistência de dados em tempo real.",
      "Segurança & Governança: Aplicação de regras de acesso granulares via Row Level Security (RLS) no PostgreSQL e respeito aos princípios de privacidade da LGPD.",
      "Recursos do Sistema: Feed dinâmico com Threads de respostas expansíveis, sistema de curtidas, perfis customizáveis com embeds de mídia (Spotify) e rotas de configurações."
    ],
    githubUrl: "https://github.com/VictorPoiani/postit"
  },
  {
    id: "computational-vision",
    title: "Visão Computacional & Análise em Tempo Real",
    tagline: "Detecção de objetos, rastreamento espacial e análise biométrica facial com Python",
    category: "IA & Visão Computacional",
    image: visionImg,
    tags: ["Python", "OpenCV", "YOLOv8", "Deep Learning", "NumPy", "Dlib"],
    summary: "Pipeline de visão computacional desenvolvido em Python para detecção de objetos em fluxo de vídeo simultâneo, identificação de landmarks faciais (68 pontos fiduciais) e telemetria de confiança em tempo real.",
    objectives: [
      "Processar streams de vídeo com alta taxa de quadros (60 FPS) e latência inferior a 15ms.",
      "Identificar e rastrear múltiplos alvos em ambientes dinâmicos com variações bruscas de iluminação.",
      "Prover visualização de dados rica e limpa com bounding boxes e métricas de acurácia em painel técnico."
    ],
    technicalDetails: [
      "Modelos de Detecção: Combinação de YOLOv8 para identificação multiobjeto e extratores baseados em Dlib para malha facial de alta precisão.",
      "Otimização Numérica: Vetorização de matrizes com NumPy para eliminação de gargalos no pipeline de renderização de frames.",
      "Interface Técnica: Painel dark moderno com telemetria ao vivo de confiança, FPS, contagem de instâncias e mapeamento topológico."
    ],
    githubUrl: "https://github.com/VictorPoiani"
  },
  {
    id: "gamificacao-rpg",
    title: "Gamificação do Aprendizado (RPG Educacional)",
    tagline: "Metodologia pedagógica e game design transformando a sala de aula em uma jornada épica",
    category: "Educação & Gamificação",
    image: gamifyImg,
    tags: ["Game Design", "Educação", "Gamificação", "UI/UX", "Canva", "Metodologias Ativas"],
    summary: "Projeto educacional inovador que transforma conteúdos curriculares complexos em uma aventura de RPG interativa: os alunos assumem personagens, cumprem missões pedagógicas, acumulam pontos de experiência (XP) e desbloqueiam árvores de habilidades ao dominar os tópicos de estudo.",
    objectives: [
      "Elevar o engajamento estudantil e a retenção de conceitos desafiadores através de reforço positivo.",
      "Estimular trabalho em equipe cooperativo e pensamento crítico estruturado.",
      "Criar uma interface visual acessível para professores e alunos acompanharem progressos de forma clara."
    ],
    technicalDetails: [
      "Game Design & Regras: Sistema de progressão balanceado com níveis, quests principais, missões secundárias e recompensas cognitivas.",
      "Identidade Visual: Produção gráfica de mapas conceituais, árvores de habilidades e fichas de personagens em alta definição.",
      "Validação e Impacto: Estruturação testada e elogiada em apresentações pedagógicas com participação ativa superior a 80%."
    ],
    liveUrl: "https://www.canva.com/design/DAGpH5Ok2EQ/UN9pDgZBn6W9hive-66oNw/view"
  },
  {
    id: "automacoes-scripts",
    title: "Automações & Scripts de Produtividade",
    tagline: "Conjunto de utilitários em Python e Bash para rotinas diárias e integração de dados",
    category: "Sistemas & Gestão",
    tags: ["Python", "Automação", "Bash", "APIs REST", "ETL"],
    summary: "Repositório de ferramentas e scripts desenvolvidos para automatizar rotinas acadêmicas e de desenvolvimento, incluindo raspagem e consolidação de dados, renomeação em massa, relatórios periódicos e integração com APIs.",
    objectives: [
      "Eliminar tarefas manuais repetitivas através de scripts de execução única ou agendada.",
      "Praticar boas práticas de modularização em Python, tratamento de exceções e logs operacionais."
    ],
    technicalDetails: [
      "Bibliotecas: Utilização de requests, BeautifulSoup, os, sys e schedule para orquestração de rotinas.",
      "CLI Ergonomics: Interfaces de linha de comando amigáveis com parâmetros configuráveis via argparse."
    ],
    githubUrl: "https://github.com/VictorPoiani"
  },
  {
    id: "hero-whey",
    title: "Hero Whey - Empreendedorismo & Negócios",
    tagline: "Plano de negócios completo com modelagem de mercado, marca e viabilidade econômica",
    category: "Sistemas & Gestão",
    tags: ["Empreendedorismo", "Branding", "Análise de Mercado", "Gestão"],
    summary: "Primeiro plano de negócio estruturado de ponta a ponta: pesquisa de personas, análise de concorrentes, formulação da proposta de valor, precificação unitária, identidade visual de marca e estratégia de divulgação multicanal.",
    objectives: [
      "Compreender a dinâmica completa de viabilidade de produto antes de qualquer linha de código.",
      "Desenvolver visão holística sobre mercado consumidor, finanças e posicionamento de marca."
    ],
    technicalDetails: [
      "Planejamento Estratégico: Matriz SWOT, modelo de negócios Canvas e projeções de ponto de equilíbrio.",
      "Identidade Visual & Comunicação: Criação de protótipos de marca, embalagens e diretrizes de design."
    ],
    githubUrl: "https://github.com/VictorPoiani"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2026 — Presente",
    title: "Bacharelado em Sistemas de Informação",
    institution: "Universidade Federal de Viçosa (UFV) · Campus Rio Paranaíba",
    description: "Graduação com imersão em desenvolvimento de software, estruturas de dados, algoritmos, bancos de dados relacionais e engenharia de software.",
    badge: "Em Andamento"
  },
  {
    year: "Formação Contínua",
    title: "Certificações Técnicas & Automação",
    institution: "Cursos e Plataformas Nacionais",
    description: "Certificados válidos em desenvolvimento front-end moderno, automações em Python, bancos de dados, gestão pessoal e metodologia ágil.",
    badge: "Certificado"
  },
  {
    year: "Iniciação e Projetos",
    title: "Projetos de Empreendedorismo & Gamificação",
    institution: "Iniciativas Autônomas e Acadêmicas",
    description: "Criação do plano de negócios Hero Whey e idealização da metodologia pedagógica de gamificação de aprendizado via RPG.",
    badge: "Destaque"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Desenvolvimento Web & Frontend",
    skills: [
      { name: "HTML5 Semântico", level: "Avançado" },
      { name: "CSS3 / Tailwind CSS", level: "Avançado" },
      { name: "JavaScript (ES6+)", level: "Avançado" },
      { name: "TypeScript", level: "Intermediário" },
      { name: "React", level: "Intermediário" },
      { name: "UI/UX & Design Responsivo", level: "Avançado" },
    ]
  },
  {
    title: "Linguagens & Backend",
    skills: [
      { name: "Python", level: "Intermediário/Avançado" },
      { name: "Linguagem C", level: "Fundamentos Sólidos" },
      { name: "Automação de Tarefas", level: "Avançado" },
      { name: "APIs RESTful", level: "Intermediário" },
    ]
  },
  {
    title: "Bancos de Dados & Ferramentas",
    skills: [
      { name: "PostgreSQL", level: "Intermediário" },
      { name: "Supabase (BaaS / RLS)", level: "Intermediário" },
      { name: "Git & GitHub", level: "Avançado" },
      { name: "Linux / Terminal", level: "Intermediário" },
    ]
  },
  {
    title: "Competências & Idiomas",
    skills: [
      { name: "Inglês Intermediário", level: "Comunicação Técnica" },
      { name: "Gestão Pessoal & Foco", level: "Prática Diária" },
      { name: "Resolução de Problemas", level: "Mentalidade Engenheira" },
      { name: "Aprendizado Contínuo", level: "Autodidata" },
    ]
  }
];
