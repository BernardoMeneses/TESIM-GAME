# TESIM Quiz Game

Quiz game criado com Adobe Animate e CreateJS.

## 🚀 Setup e Deploy

### Instalação Local

```bash
# Instalar dependências
npm install

# Iniciar servidor
npm start
```

O servidor estará disponível em `http://localhost:3000`

### Deploy

#### Vercel / Netlify
1. Faça push do código para o GitHub
2. Conecte seu repositório à plataforma
3. Configure o comando de build: `npm install`
4. Configure o comando de start: `npm start`

#### Heroku
```bash
heroku create
git push heroku main
```

#### Render / Railway
Conecte o repositório e a plataforma irá detectar automaticamente o Node.js e usar o `npm start`.

## 📁 Estrutura

- `quiz/` - Arquivos do jogo (HTML, JS, assets)
- `server.js` - Servidor Express
- `package.json` - Dependências NPM

## 🎮 Como Jogar

Acesse a URL do servidor e comece a jogar!

## 📊 API Endpoints

- `GET /api/leaderboard` - Retorna o placar
- `POST /api/save-score` - Salva pontuação do jogador
