const fs = require("fs");
const s = fs.readFileSync("src/data/chapters/ulugBeyHezarfen.ts", "utf8");
const re = /narration:\s*"((?:[^"\\]|\\.)*)"/g;
let m, i = 0, t = 0;
const bad = [];
while ((m = re.exec(s))) {
  i++;
  const w = m[1].replace(/\\n/g, " ").split(/\s+/).filter(Boolean).length;
  const p = m[1].split("\\n\\n").length;
  t += w;
  console.log(i, w, p);
  if (w < 130 || w > 180 || p < 2 || p > 3) bad.push([i, w, p]);
}
console.log("avg", (t / i).toFixed(1), "count", i, "bad", JSON.stringify(bad));
const a = fs.readFileSync("src/utils/imageAssets.ts", "utf8");
const imgs = [...s.matchAll(/(?:image|imagePath): "([^"]+)"/g)].map((x) => x[1]);
console.log("missing", imgs.filter((x) => !a.includes('"' + x + '"')));
// duplicate images per chapter
const chunks = s.split(/id: "(?:ulug-bey-ch\d|piri-reis-ch3)",/).slice(1);
chunks.forEach((c, k) => {
  const im = [...c.matchAll(/\n\s+image: "([^"]+)"/g)].map((x) => x[1]);
  const dup = im.filter((x, j) => im.indexOf(x) !== j);
  console.log("chunk", k, "scenes", im.length, "dups", dup);
});
