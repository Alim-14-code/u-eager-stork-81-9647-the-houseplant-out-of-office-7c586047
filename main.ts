// The Houseplant Out-of-Office — entry writer.
// Reads the single-line out-of-office message from entry.txt, validates it
// against the competition gate (1–120 characters, not only whitespace,
// exactly one line), and writes it to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node standard library only; no dependencies, no network.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_CHARS = 120;

const here = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(here, "entry.txt"), "utf8");
const line = raw.replace(/\r\n?/g, "\n").replace(/\n$/, "");

if (line.length === 0 || line.trim().length === 0) {
  console.error("entry is empty or only whitespace");
  process.exit(1);
}
if (line.length > MAX_CHARS) {
  console.error(`entry is ${line.length} characters, over the ${MAX_CHARS} cap`);
  process.exit(1);
}
if (line.includes("\n")) {
  console.error("entry must be a single line");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const outText = line + "\n";
writeFileSync(join(outDir, "entry.txt"), outText, "utf8");
console.log(`fern's auto-reply delivered: ${line.length} chars written to ${outDir}`);
