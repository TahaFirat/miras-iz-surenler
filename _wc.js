const fs = require("fs");
const s = fs.readFileSync("src/data/chapters/neneHarizmiAliKuscu.ts", "utf8");
const re = /title:\s*"([^"]+)",\s*narration:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g;
let m, tot = 0, n = 0;
while ((m = re.exec(s))) {
  const w = m[2].replace(/\\n/g, " ").split(/\s+/).filter(Boolean).length;
  tot += w; n++;
  console.log(n, w, m[1], w < 130 || w > 180 ? "  <<<<" : "");
}
console.log("avg", (tot / n).toFixed(1), n);
