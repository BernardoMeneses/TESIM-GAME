import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dir = path.join(process.cwd(), "scores");
  if (!fs.existsSync(dir)) return res.json([]);

  const files = fs.readdirSync(dir);
  const results = [];

  for (const f of files) {
    const data = JSON.parse(fs.readFileSync(path.join(dir, f)));
    let correct = 0;
    let time = 0;

    data.results.forEach(r => {
      if (r.isCorrect) {
        correct++;
        time += r.timeMs || 0;
      }
    });

    results.push({
      player: data.player,
      score: correct * time
    });
  }

  results.sort((a, b) => b.score - a.score);
  res.json(results);
}
