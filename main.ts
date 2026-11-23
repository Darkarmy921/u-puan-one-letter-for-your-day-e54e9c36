// One Letter for Your Day — entrypoint.
// Writes exactly one character to /output/entry.txt, and nothing else:
// no word, no gloss, no punctuation, no trailing newline.
// The letter is K. K stands for "knackered": wrung-out after a long day
// of building. The word is vivid, funny and true, and the letter is the
// whole entry — the judge reads the letter and hears the word behind it.
import { mkdirSync, writeFileSync } from "node:fs";

// The day in one letter. Chosen over the obvious picks (A for amazing,
// Z for zero sleep): knackered is sharper, funnier, and honest about
// a day that started early and never let up.
const LETTER = "K";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LETTER, "utf8");
}

writeEntry();
