import test from 'node:test';
import assert from 'node:assert/strict';
import { PROJECTS, PERSONAL_INFO, TIMELINE, SKILL_CATEGORIES } from './portfolioData.ts';

const isHttpUrl = (value: string) => {
  try {
    const { protocol } = new URL(value);
    return protocol === 'https:' || protocol === 'http:';
  } catch {
    return false;
  }
};

test('portfolio data has essential identity and contact fields', () => {
  assert.equal(PERSONAL_INFO.name, 'Victor Poiani');
  assert.equal(PERSONAL_INFO.email, 'dev.victorpoiani@gmail.com');
  assert.ok(PERSONAL_INFO.github.includes('VictorPoiani'));
  assert.ok(PERSONAL_INFO.institution.includes('Universidade Federal de Viçosa'));
});

test('social links are valid absolute URLs', () => {
  for (const url of [PERSONAL_INFO.github, PERSONAL_INFO.linkedin, PERSONAL_INFO.instagram]) {
    assert.ok(isHttpUrl(url), `URL inválida: ${url}`);
  }
});

test('exactly one featured project (The Insight) with required details', () => {
  const featured = PROJECTS.filter((p) => p.featured);
  assert.equal(featured.length, 1, 'Deve haver exatamente um projeto em destaque');
  const [insight] = featured;
  assert.ok(insight.title.includes('The Insight'));
  assert.ok(insight.technicalDetails.length >= 3);
  assert.ok(insight.objectives.length >= 2);
  assert.ok(insight.image, 'O projeto em destaque precisa de imagem');
});

test('all projects have unique ids and required content', () => {
  assert.ok(PROJECTS.length >= 4);
  const ids = PROJECTS.map((p) => p.id);
  assert.equal(new Set(ids).size, ids.length, 'ids de projeto duplicados');

  for (const project of PROJECTS) {
    assert.ok(project.title.length > 0, `${project.id}: sem título`);
    assert.ok(project.summary.length > 0, `${project.id}: sem resumo`);
    assert.ok(project.tags.length > 0, `${project.id}: sem tags`);
    assert.ok(project.objectives.length > 0, `${project.id}: sem objetivos`);
    assert.ok(project.technicalDetails.length > 0, `${project.id}: sem detalhes técnicos`);
  }
});

test('project links are valid and liveUrl never duplicates githubUrl', () => {
  for (const project of PROJECTS) {
    for (const url of [project.githubUrl, project.liveUrl]) {
      if (url !== undefined) assert.ok(isHttpUrl(url), `${project.id}: URL inválida (${url})`);
    }
    if (project.githubUrl && project.liveUrl) {
      assert.notEqual(
        project.githubUrl,
        project.liveUrl,
        `${project.id}: liveUrl igual ao githubUrl (botão duplicado/enganoso)`,
      );
    }
  }
});

test('project images are not raw /src paths (they would break in production)', () => {
  const images = [PERSONAL_INFO.portrait, ...PROJECTS.map((p) => p.image)].filter(
    (img): img is string => Boolean(img),
  );
  for (const img of images) {
    assert.ok(!img.startsWith('/src/'), `Caminho quebra no build: ${img}`);
    assert.ok(img.endsWith('.webp'), `Formato inesperado: ${img}`);
  }
});

test('timeline and skill categories contain structured milestones', () => {
  assert.ok(TIMELINE.length >= 3);
  assert.equal(SKILL_CATEGORIES.length, 4, 'AboutTimeline mapeia um ícone para cada uma das 4 categorias');
});
