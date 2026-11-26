// Funniest Forecast for a City That Isn't — make.fun program/v1 entry.
// Writes one line, the funniest weather forecast for a city that does not
// exist, to /output/entry.txt. Fully deterministic: no network, no clock,
// no randomness — the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

// Revised draft: the first version ran 164 characters, over the 120-char
// gate. Cut the "Forecast for" preamble (the line should read as the
// forecast itself, not announce it), cut "today" and the trailing advisory
// clause, and kept the sharpest turn — the relocation is traditional.
// Shorter, flatter, and the joke still lands on the last words.
const LINE =
  "Blusterfield: winds of 60 mph will move the town hall three streets east, as is traditional in March.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
