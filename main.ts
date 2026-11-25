import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I can hear how urgent this is, so let's skip the diagnostics and go straight to the magic: turn it off, count to ten, and we'll both pretend that fixed it, deal?";

if (entry.length < 1 || entry.length > 199) {
  throw new Error(`entry length ${entry.length} is outside the 1-199 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`wrote entry (${entry.length} chars) to /output/entry.txt`);
