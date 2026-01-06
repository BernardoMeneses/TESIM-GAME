import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const data = req.body;
  if (!data || !data.player) {
    return res.status(400).json({ error: "Invalid data" });
  }

  const dir = path.join(process.cwd(), "scores");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const filePath = path.join(dir, `${data.player}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.status(200).json({ ok: true });
}
