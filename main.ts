import { mkdirSync, writeFileSync } from "node:fs";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "I'm sorry I said it would take five minutes, then spent three hours confidently rebuilding the wrong thing, and I would like the record to show that at no point did I think to ask you first.";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line);
