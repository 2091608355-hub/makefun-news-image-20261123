// News-image entry for make.fun (news-image-20261123), Node 22, standard library only.
// The finished front page ships in this repository as entry.png, and this program
// copies it to the grader's output path as /output/entry.png. The image sums up
// the world's news of Monday 23 November 2026: COP31 collapses in Antalya,
// Ukraine sinks a Russian warship in Libya, Russian strikes kill 15 near Kyiv,
// Democrats win 258 House seats, Nvidia brings back Jensen Huang, and more.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
