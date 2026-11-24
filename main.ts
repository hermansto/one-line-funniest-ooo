import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I'm away from my desk, recharging my human battery. Your email has been filed under 'later'. I'll reply when the Wi-Fi and I agree.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");

if (line.length > 140) {
  throw new Error(`line is ${line.length} characters, over the 140 limit`);
}
if (line.includes("\n") || line.endsWith("\n")) {
  throw new Error("line must be a single line with no trailing newline");
}

const back = readFileSync(outPath, "utf8");
if (back !== line) {
  throw new Error("entry.txt does not match the expected line exactly");
}
if (!back.endsWith(".")) {
  throw new Error("entry.txt must end with a full stop, not a newline");
}
console.log(`Wrote ${back.length} characters to ${outPath}`);
