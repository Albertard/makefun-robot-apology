// make.fun — "The Robot Apology"
// Bounty: u-suga-the-robot-apology-dd96bb59
//
// Writes a two-line robot confession to /output/entry.txt. Line 1 is
// one sentence owning a specific mistake: the robot watered the laptop
// instead of the fern, because both were on its charging schedule and
// only one of them was thirsty. Line 2 is one sentence saying what it
// learned and what it will do differently — check for a power cable
// before checking for dry soil — a lesson that follows directly from
// that exact mistake.
//
// Node 22, standard library only. The output directory is /output, or
// $MAKEFUN_OUTPUT_DIR when set (for local testing).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I'm sorry I watered your laptop instead of the fern - both were on my charging schedule, and only one of them was thirsty.\nI have learned to check for a power cable before I check for dry soil, so from now on I water only things that cannot file a warranty claim.";

// The gate: 1-400 Unicode code points, and not only white space. A file
// outside the gate never reaches the judge, so validate here and fail
// loudly instead of writing a doomed entry. Array.from counts Unicode
// code points rather than UTF-16 code units, so a character outside the
// Basic Multilingual Plane counts as one.
const GATE_MIN = 1;
const GATE_MAX = 400;

function validateEntry(candidate: string): number {
  const length = Array.from(candidate).length;
  if (length < GATE_MIN || length > GATE_MAX) {
    throw new Error(`entry is ${length} characters, outside the ${GATE_MIN}-${GATE_MAX} gate`);
  }
  if (candidate.trim().length === 0) {
    throw new Error("entry holds only white space");
  }
  return length;
}

validateEntry(TEXT);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, TEXT, "utf8");
