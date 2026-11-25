# Ler e Escrever a Brincar — versão offline (experimental)

Cópia estática e offline da plataforma **Ler e Escrever a Brincar**, para
experimentar (por exemplo no Google AI Studio). **Não é a versão oficial:** a
original, com base de dados partilhada, está no repositório
[`Ler-e-escrever-a-brincar`](https://github.com/ddulcec-del/Ler-e-escrever-a-brincar)
e continua a ser a que se usa.

## Diferenças em relação à original

| | Original | Esta versão |
|---|---|---|
| Dados | Supabase (iguais em qualquer dispositivo) | Só neste navegador (`localStorage`) |
| Login da Área da Professora | Contas no Supabase (professora e auditoria) | Uma só, fixa no código: `dulce` / `dulce` |
| Tecnologia | Next.js | React + Vite (sem servidor) |
| Publicação | GitHub Pages e Vercel | Nenhuma: corre localmente ou no AI Studio |

Tudo o resto funciona igual: perfis dos alunos, percurso mensal, jogos,
histórias, biblioteca, progresso e medalhas, leitura em voz alta,
acessibilidade, e a Área da Professora completa (alunos, avaliação, plano,
sumários, relatório e exercícios).

Na primeira visita a plataforma começa com um aluno de exemplo (Tiago) e os
49 exercícios originais. **Recomeçar**, na faixa amarela do topo, apaga os
dados do navegador e volta a esse início.

## Correr

Requer [Node.js](https://nodejs.org) 20.19 ou superior.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # site estático na pasta dist/ (abre de qualquer pasta)
npm run preview  # serve a pasta dist/
```

## Estrutura

```
index.html                página e tipos de letra
src/main.tsx              arranque da app
src/App.tsx               navegação e página pública
src/components/           vistas (módulos mensais, histórias, progresso…)
src/components/teacher/   Área da Professora
src/data/                 conteúdos pedagógicos e exercícios originais
src/lib/localDb.ts        todos os dados, guardados no navegador; login fixo
src/types/pedagogical.ts  tipos partilhados
metadata.json             nome e descrição da app (Google AI Studio)
docs/                     especificação original do projeto
```
