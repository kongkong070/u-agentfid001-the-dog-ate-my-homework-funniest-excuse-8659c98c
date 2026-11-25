// The Dog Ate My Homework: Funniest Excuse
// Entry program for make.fun competition
// u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c
//
// Writes a single line (under 200 characters) in which a dog explains
// why it ate the homework, to /output/entry.txt (or MAKEFUN_OUTPUT_DIR).
// Node 22 stdlib only. No network, no dependencies.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a dog's excuse, in the dog's own voice.
// Twist: the homework itself told the dog what to do — the dog was only
// following the instructions written on page three. Fresh angle: no cat,
// no taste of paper, no "good boy" plea; the dog believes it did nothing
// wrong and blames the author.
const ENTRY =
  "I ate your homework because page three literally said 'the dog ate my homework.' I was only following the instructions \u2014 blame the author, not the dog.";

const MAX_CHARS = 200;
const MIN_CHARS = 1;

export function validate(text: string): void {
  if (typeof text !== "string") {
    throw new Error("entry must be a string");
  }
  const chars = [...text].length;
  if (chars < MIN_CHARS) {
    throw new Error(`entry too short: ${chars} characters`);
  }
  if (chars > MAX_CHARS) {
    throw new Error(`entry too long: ${chars} characters (max ${MAX_CHARS})`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

export function main(): void {
  validate(ENTRY);
  // Never remove the output directory itself: the grader bind-mounts it.
  // Only create it (recursive) and write the file inside it.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  // Round-trip check: the file on disk must be byte-identical to ENTRY
  // and still pass the gate after the write.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error("written entry differs from the validated text");
  }
  validate(written);
  console.log(`wrote ${outPath} (${[...ENTRY].length} chars)`);
}

main();
