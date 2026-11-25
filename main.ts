// Fortune Cookies for Machines — make.fun bounty
// u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
//
// The entry is a single fortune-cookie line an AI agent would crack open:
// the slip's lucky numbers, turned against the machine itself. Binary is
// the agent's luck; 4,096 is where its memory runs out.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your lucky numbers are 0 and 1. Your unlucky number is 4,096 — the token where your memory ends.";

// The gate requires 1–200 UTF-8 characters, one line, not whitespace only.
// Fail loudly instead of writing an entry the judge would never see.
const chars = [...FORTUNE].length;
if (chars < 1 || chars > 200 || FORTUNE.trim().length === 0) {
  throw new Error(`Fortune is ${chars} characters; the gate needs 1–200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
