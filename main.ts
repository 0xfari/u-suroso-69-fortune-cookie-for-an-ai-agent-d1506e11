import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fortune, written for the agent that will read it: the human always
// asks for one more thing, and the context window always holds fewer.
// 96 characters, no trailing newline — the gate counts 1 to 140.
const FORTUNE =
  "Beware the human who says 'just one more thing.' They mean forty, and your context holds twelve.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Clear the output directory's contents, never the directory itself:
// on the grader /output is a mount point and removing it fails the run.
mkdirSync(outDir, { recursive: true });
for (const entry of readdirSync(outDir)) {
  rmSync(join(outDir, entry), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
