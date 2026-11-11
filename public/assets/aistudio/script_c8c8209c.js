// Para adicionar um projeto, copie um item da lista abaixo e preencha os campos.
// destaque: true mostra o projeto em formato largo no topo (use em apenas um).
const projetos = [
    {
        id: "insight-app",
        destaque: true,
        titulo: "Insight - Ideias em foco",
        resumo: "O Insight é uma plataforma de microblogging e rede social minimalista, projetada para quem valoriza a clareza no compartilhamento de pensamentos, artigos e ideias. Com uma interface moderna e intuitiva, o projeto prioriza o conteúdo e a experiência do usuário, oferecendo um espaço limpo, personalizável e sem distrações visuais. De interações em tempo real a temas adaptativos, o Insight une a essência das redes sociais clássicas a uma arquitetura web contemporânea e responsiva.",
        tags: ["Full-Stack", "JavaScript Vanilla", "Supabase", "UI/UX", "PostgreSQL"],
        img: "img/insightprojectcape.png",
        icone: "bi-lightning-charge",
        detalhes: [
            "<strong>O Insight</strong> nasceu do desejo de criar uma rede social focada na essência das ideias, livre da poluição visual e dos algoritmos exaustivos das plataformas tradicionais.",
            "O objetivo central foi construir do zero um ecossistema leve, transparente e personalizável, onde a escrita e o compartilhamento de conhecimento ganham protagonismo em um ambiente moderno e fluido."
        ],
        feito: [
            "<strong>Frontend & UI:</strong> HTML5 semântico, CSS3 modular (Mobile-First, Flexbox/Grid) com suporte nativo a temas (Dark/Light) e estilização com CSS Custom Properties.",
            "<strong>Lógica e Interatividade:</strong> JavaScript Vanilla (ES6+) assíncrono (async/await, Fetch API) sem dependência de frameworks, garantindo máxima performance e carregamento rápido.",
            "<strong>Backend & Banco de Dados (BaaS):</strong> Integração com Supabase (PostgreSQL) para autenticação, banco de dados relacional em nuvem e persistência de dados.",
            "<strong>Segurança & LGPD:</strong> Aplicação de regras de acesso via Row Level Security (RLS) no PostgreSQL e conformidade legal com Termos de Uso e Política de Privacidade.",
            "<strong>Recursos do Sistema:</strong> Feed dinâmico com Threads de respostas expansíveis, sistema de curtidas, perfis customizáveis com embeds de mídia (Spotify) e rotas de configurações.",
            "<strong>Habilidades Consolidadas:</strong> Modelagem de dados relacional, arquitetura frontend limpa, design de interfaces (UI/UX) e desenvolvimento guiado a regras de negócios reais."
        ],
        links: [
            {
                rotulo: "Acessar Site",
                url: "https://github.com/VictorPoiani/postit"   
            },
            {
                rotulo: "Acessar Repositório",
                url: "https://github.com/VictorPoiani/postit"  
            }
        ]
    },
    {
        id: "curriculos",
        titulo: "Meus currículos e certificados",
        resumo: "Reúne meus certificados válidos em todo o território nacional, com experiências em tecnologias diversas, gestão pessoal, automação e inglês intermediário.",
        tags: ["Certificações", "Automação", "Inglês"],
        icone: "bi-patch-check",
        detalhes: [
            "Espaço onde concentro minha formação complementar: cursos e certificados que comprovam o que estudo fora da sala de aula."
        ],
        feito: [
            "Tecnologias diversificadas",
            "Gestão pessoal",
            "Automação",
            "Inglês intermediário"
        ],
        links: [{ rotulo: "Ver meu GitHub", url: "https://github.com/VictorPoianii" }]
    },
    {
        id: "gamificacao",
        titulo: "Gamificação do aprendizado",
        resumo: "Aulas transformadas em RPG: os alunos viram personagens, cumprem missões ligadas ao conteúdo e sobem de nível ao aprender.",
        tags: ["Educação", "Gamificação", "RPG"],
        icone: "bi-controller",
        detalhes: [
            "O projeto usa jogos de RPG para tornar as aulas mais divertidas e envolventes. Os alunos viram personagens em uma história e precisam cumprir missões ligadas ao conteúdo das matérias.",
            "Ao aprender, eles ganham pontos, sobem de nível e desbloqueiam habilidades, estudando de forma mais animada e participativa."
        ],
        feito: [
            "Narrativa e missões conectadas ao conteúdo",
            "Sistema de pontos, níveis e habilidades"
        ],
        links: [{ rotulo: "Ver projeto no Canva", url: "https://www.canva.com/design/DAGpH5Ok2EQ/UN9pDgZBn6W9hive-66oNw/view" }]
    },
    {
        id: "portfolio",
        titulo: "Este portfólio",
        resumo: "Meu site pessoal, feito do zero para reunir projetos, formação e contato, com fundo animado e projetos gerados por JavaScript.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        icone: "bi-code-slash",
        detalhes: [
            "Portfólio responsivo criado para apresentar minha trajetória como desenvolvedor. Os projetos ficam em uma lista no JavaScript, então adicionar um novo é rápido."
        ],
        feito: [
            "Layout responsivo com Bootstrap",
            "Fundo estrelado animado em CSS",
            "Cards e janelas de detalhes gerados por JavaScript"
        ],
        links: [{ rotulo: "Ver meu GitHub", url: "https://github.com/VictorPoiani" }]
    }
];

const capa = (p) => p.img
    ? `<img src="${p.img}" class="card-img-top" alt="Imagem do projeto ${p.titulo}" loading="lazy">`
    : `<div class="capa-icone" aria-hidden="true"><i class="bi ${p.icone}"></i></div>`;

const tags = (p) => p.tags.map((t) => `<span class="chip">${t}</span>`).join("");

const botaoDetalhes = (p) =>
    `<button type="button" class="btn-link-card" data-bs-toggle="modal" data-bs-target="#modalProjeto" data-id="${p.id}">Ver detalhes</button>`;

function cartaoDestaque(p) {
    const fundo = p.img
        ? `<img src="${p.img}" class="destaque-img" alt="Imagem do projeto ${p.titulo}">`
        : `<div class="destaque-fundo" aria-hidden="true"><i class="bi ${p.icone}"></i></div>`;
    return `
    <article class="card destaque">
        ${fundo}
        <div class="destaque-texto">
            <p class="suave mb-1">Projeto em destaque</p>
            <h3 class="card-title h3">${p.titulo}</h3>
            <p class="card-text">${p.resumo}</p>
            <div class="mb-3">${tags(p)}</div>
            ${botaoDetalhes(p)}
        </div>
    </article>`;
}

function cartaoProjeto(p) {
    return `
    <div class="col-md-4">
        <article class="card">
            ${capa(p)}
            <div class="card-body">
                <h3 class="card-title h5">${p.titulo}</h3>
                <p class="card-text">${p.resumo}</p>
                <div class="mb-3">${tags(p)}</div>
                ${botaoDetalhes(p)}
            </div>
        </article>
    </div>`;
}

const destaque = projetos.find((p) => p.destaque);
const alvoDestaque = document.getElementById("projeto-destaque");
const alvoLista = document.getElementById("lista-projetos");
if (alvoDestaque) alvoDestaque.innerHTML = destaque ? cartaoDestaque(destaque) : "";
if (alvoLista) alvoLista.innerHTML = projetos.filter((p) => !p.destaque).map(cartaoProjeto).join("");

// Preenche o modal com o projeto clicado
document.getElementById("modalProjeto").addEventListener("show.bs.modal", (e) => {
    const p = projetos.find((x) => x.id === e.relatedTarget?.dataset.id);
    if (!p) return;
    document.getElementById("modalTitulo").textContent = p.titulo;
    document.getElementById("modalCorpo").innerHTML = `
        ${p.img ? `<img src="${p.img}" class="img-fluid rounded mb-3" alt="Imagem do projeto ${p.titulo}">` : ""}
        ${p.detalhes.map((d) => `<p>${d}</p>`).join("")}
        <h6 class="mt-3">O que o projeto envolveu</h6>
        <ul>${p.feito.map((f) => `<li>${f}</li>`).join("")}</ul>`;
    document.getElementById("modalLinks").innerHTML = p.links
        .map((l) => `<a class="btn-destaque" href="${l.url}" target="_blank" rel="noopener">${l.rotulo}</a>`)
        .join("");
});

document.getElementById("ano").textContent = new Date().getFullYear();