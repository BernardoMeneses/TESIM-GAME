import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('quiz'));

// API para leaderboard
app.get('/api/leaderboard', (req, res) => {
  const scoresDir = path.join(__dirname, 'quiz', 'scores');
  
  if (!fs.existsSync(scoresDir)) {
    return res.json([]);
  }

  const files = fs.readdirSync(scoresDir);
  const results = [];

  for (const file of files) {
    if (file.endsWith('.json')) {
      try {
        const data = JSON.parse(fs.readFileSync(path.join(scoresDir, file), 'utf8'));
        let correct = 0;
        let time = 0;

        if (data.results && Array.isArray(data.results)) {
          data.results.forEach(r => {
            if (r.isCorrect) {
              correct++;
              time += r.timeMs || 0;
            }
          });
        }

        results.push({
          player: data.player || file.replace('.json', ''),
          score: correct * time
        });
      } catch (err) {
        console.error(`Error reading ${file}:`, err);
      }
    }
  }

  results.sort((a, b) => b.score - a.score);
  res.json(results);
});

// API para salvar score
app.post('/api/save-score', (req, res) => {
  const scoresDir = path.join(__dirname, 'quiz', 'scores');
  
  if (!fs.existsSync(scoresDir)) {
    fs.mkdirSync(scoresDir, { recursive: true });
  }

  const { player, results } = req.body;
  
  if (!player || !results) {
    return res.status(400).json({ error: 'Missing player or results' });
  }

  const filename = `${player}.json`;
  const filepath = path.join(scoresDir, filename);

  try {
    fs.writeFileSync(filepath, JSON.stringify({ player, results }, null, 2));
    res.json({ success: true, message: 'Score saved successfully' });
  } catch (err) {
    console.error('Error saving score:', err);
    res.status(500).json({ error: 'Failed to save score' });
  }
});

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'quiz', 'trabalho 2.html'));
});

app.listen(PORT, () => {
  console.log(`🎮 Server running on http://localhost:${PORT}`);
  console.log(`📊 Leaderboard API: http://localhost:${PORT}/api/leaderboard`);
});
