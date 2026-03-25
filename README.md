
# Sistema Simulado Dockerizado

Aplicação web para realização e correção de simulados, containerizada com Docker, construída em **Next.js** (App Router) e TypeScript. [page:1]

O objetivo é oferecer uma base para um sistema de simulados moderno, com frontend em Next.js e backend integrado via Prisma e banco de dados em container Docker. [page:1]

---

## Tecnologias utilizadas

- Next.js (App Router) e React [page:1]  
- TypeScript [page:1]  
- Prisma ORM (pasta `prisma/`) [page:1]  
- Docker e Docker Compose (`Dockerfile`, `docker-compose.yml`) [page:1]  
- Cloudflared Tunnel (`cloudflared.yml`, `tunnel.sh`, `tunnel.bat`) [page:1]  
- CSS/Tailwind (config via `postcss.config.mjs`) [page:1]  

---

## Estrutura do projeto

Principais pastas e arquivos: [page:1]

- `app/` – páginas e rotas da aplicação Next.js (App Router).  
- `components/` – componentes reutilizáveis de UI.  
- `docs/` – documentação auxiliar do projeto.  
- `lib/` – funções utilitárias, configurações e integrações.  
- `prisma/` – esquema do banco de dados e migrações.  
- `public/` – assets estáticos.  
- `Dockerfile` – definição da imagem da aplicação.  
- `docker-compose.yml` – orquestração de serviços (app, banco, etc).  
- `cloudflared.yml`, `tunnel.sh`, `tunnel.bat` – configuração e scripts para o túnel Cloudflare.  
- `GETTING_STARTED_TUNNEL.md` e `README-TUNNEL.md` – instruções específicas do túnel. [page:1]  

---

## Pré-requisitos

- Node.js (versão recomendada conforme `package.json`) [page:1]  
- Docker e Docker Compose instalados  
- Conta e binário do Cloudflare Tunnel (caso use o túnel externo) [page:1]  

---

## Como rodar localmente (sem Docker)

1. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn
   # ou
   pnpm install
   # ou
   bun install
   ```

2. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   # ou
   bun dev
   ```

3. Acesse em: [http://localhost:3000](http://localhost:3000). [page:1]

Você pode editar a página inicial em `app/page.tsx`; as alterações são aplicadas automaticamente em hot reload. [page:1]

---

## Como rodar com Docker

1. Construa e suba os containers:

   ```bash
   docker-compose up --build
   ```

2. Após o build, acesse o sistema em `http://localhost:3000` (ou porta configurada no `docker-compose.yml`). [page:1]

Caso exista serviço de banco no `docker-compose.yml`, garanta que o Prisma está apontando para a URL correta via variáveis de ambiente. [page:1]

---

## Banco de dados (Prisma)

1. Ajuste o arquivo `.env` com a variável `DATABASE_URL` apontando para o banco do container (ex.: Postgres ou MySQL). [page:1]  
2. Execute as migrações (quando necessário):

   ```bash
   npx prisma migrate dev
   ```

3. Opcional: gere o cliente Prisma:

   ```bash
   npx prisma generate
   ```

---

## Túnel Cloudflare (opcional)

O projeto inclui configuração para expor o sistema via Cloudflare Tunnel. [page:1]

- Leia `GETTING_STARTED_TUNNEL.md` para entender o fluxo inicial. [page:1]  
- Use `tunnel.sh` (Linux/macOS) ou `tunnel.bat` (Windows) para subir o túnel conforme configurado em `cloudflared.yml`. [page:1]  

Exemplo (Linux/macOS):

```bash
chmod +x tunnel.sh
./tunnel.sh
```

---

## Scripts disponíveis

Veja todos os scripts em `package.json`. [page:1]  
Os principais são:

- `dev` – inicia o servidor de desenvolvimento Next.js. [page:1]  
- `build` – gera a build de produção.  
- `start` – roda a aplicação em modo produção.  
- `lint` – executa as regras de lint definidas no `eslint.config.mjs`. [page:1]  

---

## Próximos passos / TODO

- Definir e documentar o modelo de dados de simulados e questões em `prisma/schema.prisma`. [page:1]  
- Implementar telas de:
  - criação de simulado  
  - realização de prova  
  - correção e relatório de desempenho  
- Adicionar testes automatizados (unitários e E2E).  
- Configurar pipeline CI/CD (GitHub Actions) para build e testes. [page:1]  

---

## Licença


---

## Prompt de Setup para IDEs (Cursor, Windsurf, Copilot, etc.)

Copie e cole o prompt abaixo no chat da sua IDE com suporte a IA para configurar o projeto automaticamente:

```
## Prompt de Setup para IDEs (Cursor, Windsurf, Copilot, etc.)

Copie e cole o prompt abaixo no chat da sua IDE com suporte a IA para configurar o projeto automaticamente:

Você é um assistente de configuração de ambiente de desenvolvimento. Siga exatamente as etapas abaixo para configurar o projeto SistemaSimuladoDockerizado:

1. CLONE O REPOSITÓRIO
   - Execute: git clone https://github.com/Ytalosrs/SistemaSimuladoDockerizado.git
   - Entre na pasta: cd SistemaSimuladoDockerizado

2. VARIÁVEIS DE AMBIENTE
   - Crie o arquivo .env na raiz com o seguinte conteúdo:
     DATABASE_URL="postgresql://postgres:postgres@localhost:5432/simulado"
   - Esta URL deve coincidir exatamente com as configurações do docker-compose.yml
     (POSTGRES_USER=postgres, POSTGRES_PASSWORD=postgres, POSTGRES_DB=simulado)

3. SUBA OS CONTAINERS DOCKER
   - Certifique-se de que o Docker Desktop está em execução
   - Execute: docker-compose up -d --build
   - Aguarde todos os serviços ficarem healthy antes de prosseguir
   - Verifique com: docker-compose ps

4. INSTALE AS DEPENDÊNCIAS DO NODE
   - Execute: npm install

5. GERE O CLIENTE PRISMA
   - Execute: npx prisma generate
   - IMPORTANTE: o schema em prisma/schema.prisma define o enum SimuladoType
     com os valores v1, v2, v3 e v4. Não altere esses valores sem também atualizar
     os arquivos em docs/ e o seed.ts.

6. APLIQUE O SCHEMA NO BANCO
   - Em ambiente de desenvolvimento, execute: npx prisma db push
   - Em produção ou quando houver migrações geradas, use: npx prisma migrate deploy
   - NUNCA use migrate dev dentro do container Docker em produção.

7. POPULE O BANCO COM AS QUESTÕES (SEED)
   - Execute: npx prisma db seed
   - O seed lê os arquivos docs/Simulado.json, docs/Simulado V2.json,
     docs/Simulado V3.json e docs/Simulado V4.json
   - Cada arquivo deve conter exatamente 60 questões. O seed usa slice(0, 60)
     como garantia extra, mas emite um WARN no console se o arquivo tiver menos.
   - O seed verifica se já existem registros para cada SimuladoType antes de
     inserir — se já houver dados, ele pula aquele simulado. Para resetar, execute
     primeiro: npx prisma migrate reset (ATENÇÃO: apaga todos os dados)
   - Cada questão no JSON deve ter obrigatoriamente os campos:
       -  content   (String) — enunciado completo, sem truncamento
       -  options   (String[]) — array de alternativas, ex: ["A. texto", "B. texto"]
       -  correctAnswer (String) — letra da alternativa correta, ex: "A"
         Para múltipla escolha, separe com vírgula e espaço, ex: "A, C"
       -  explanation (String, opcional) — explicação da resposta

8. (OPCIONAL) VISUALIZE O BANCO DE DADOS
   - Execute: npx prisma studio
   - Acesse em: http://localhost:5555
   - Use para conferir se os 4 simulados foram populados com 60 questões cada.

9. INICIE O SERVIDOR DE DESENVOLVIMENTO
   - Execute: npm run dev
   - Acesse a aplicação em: http://localhost:3000
   - Para acessar um simulado específico: http://localhost:3000/quiz?type=v1
     (substitua v1 por v2, v3 ou v4)

ORDEM RESUMIDA DOS COMANDOS:
  git clone https://github.com/Ytalosrs/SistemaSimuladoDockerizado.git
  cd SistemaSimuladoDockerizado
  echo 'DATABASE_URL="postgresql://postgres:postgres@localhost:5432/simulado"' > .env
  docker-compose up -d --build
  npm install
  npx prisma generate
  npx prisma db push
  npx prisma db seed
  npm run dev

REGRAS CRÍTICAS SOBRE AS QUESTÕES — NUNCA IGNORE:
  ✗ Nunca crie questões manualmente sem passar pelo seed.ts
  ✗ Nunca altere o campo simuladoType nos JSONs — ele é ignorado pelo seed,
    que usa sempre o tipo definido no array files[] do seed.ts
  ✗ Nunca remova ou renomeie os valores do enum SimuladoType sem migrar o banco
  ✗ Se um JSON tiver menos de 60 questões, o simulado correspondente ficará
    incompleto — o seed emite WARN mas não bloqueia a execução
  ✓ Sempre confira o total de questões via Prisma Studio após o seed
  ✓ Para múltipla escolha, o campo correctAnswer deve usar o padrão "A, C"
    (letra maiúscula, vírgula, espaço) — o componente QuestionCard detecta
    multi-select por isMultiSelect(correctAnswer) que checa se há vírgula

EM CASO DE ERROS COMUNS:
  -  Banco ainda não pronto após docker-compose up → aguarde 5s e repita o seed
  -  "Enum value not found" no Prisma → rode npx prisma generate novamente
  -  Simulado com menos de 60 questões → confira o JSON correspondente em docs/
  -  Alternativas não marcáveis → verifique se options[] é um array válido no JSON
  -  Enunciado truncado → certifique-se de que o campo content não tem \n ou
    caracteres especiais que quebrem o parse do JSON
``` 

Defina aqui a licença do projeto (por exemplo, MIT, Apache 2.0, etc.).  
Enquanto não houver arquivo `LICENSE`, considere este projeto em estado de rascunho/estudo. [page:1]
