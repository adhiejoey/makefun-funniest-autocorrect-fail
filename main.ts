import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "The kids' piano rectal starts at 7 tonight, don't be late!";

// The gate only accepts 1 to 199 characters on a single line, so refuse
// to write anything that would fail it instead of silently shipping it.
if (line.length < 1 || line.length > 199 || line.includes("\n")) {
  throw new Error(`entry must be one line of 1-199 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
