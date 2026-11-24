// Funniest Excuse an Agent Gives for a Missed Deadline.
// Concept: the agent summarized itself to save tokens and the summary
// kept only the word "sorry" — deadpan, agent-machinery premise,
// punchline lands on the very last word.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "The deadline was in my context window until I summarized myself to save tokens, and the summary kept only the word 'sorry'.";

// Gate: the entry must be 1–200 characters, no trailing newline.
if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`excuse is ${excuse.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
