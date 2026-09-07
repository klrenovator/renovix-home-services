/**
 * Smart Service Finder — query tokenizer.
 *
 * Pure function. No I/O. Handles:
 *   - Latin (English / Bahasa Melayu) — Unicode word boundary split, lowercased
 *   - Simplified Chinese — 1-character unigram + 2-character bigram pass
 *   - mixed-language queries — both passes are run, the result carries both
 *
 * Stop-words are intentionally **minimal** (a tiny per-language list), so a
 * BM25-style "drop common words" approach does not accidentally drop a
 * meaningful product term. Home-services vocabulary is full of short
 * technical words (`rm`, `db`, `ip`, `mc`, …) that we want to keep.
 */

import type { LanguageCode } from "@/data/languages";
import type { TokenizedQuery } from "@/data/search/types";

/** A Unicode "word" is a contiguous run of letters or digits. */
const WORD_RE = /[\p{L}\p{N}]+/gu;

/** A CJK character is one of Han / Hiragana / Katakana. */
const CJK_RE = /[㐀-鿿぀-ゟ゠-ヿ]/u;

/** Tiny per-language stop-word list. Keep this small on purpose. */
const STOP_WORDS: Record<LanguageCode, ReadonlySet<string>> = {
  en: new Set(["the", "a", "an", "and", "or", "of", "in", "to", "for", "on", "with", "is", "i", "we", "you", "my", "our"]),
  ms: new Set(["yang", "dan", "di", "ke", "dari", "untuk", "dengan", "saya", "kita", "anda", "mahu"]),
  zh: new Set(["的", "了", "我", "你", "他", "她", "它", "和", "与", "在", "是", "有", "要", "想", "找", "请"]),
};

/** Lowercase Latin, keep CJK as-is. Strip zero-width characters. */
function normalize(input: string): string {
  return input.replace(/[\u200B-\u200D\uFEFF]/g, "").toLowerCase();
}

function splitLatin(text: string, stopWords: ReadonlySet<string>): string[] {
  const out: string[] = [];
  const matches = text.match(WORD_RE);
  if (!matches) return out;
  for (const m of matches) {
    if (m.length < 2) continue;
    if (stopWords.has(m)) continue;
    out.push(m);
  }
  return out;
}

function splitCjk(text: string, stopWords: ReadonlySet<string>): string[] {
  const out: string[] = [];
  const chars: string[] = [];
  for (const ch of text) {
    if (CJK_RE.test(ch)) chars.push(ch);
  }
  // Unigrams
  for (const ch of chars) {
    if (!stopWords.has(ch)) out.push(ch);
  }
  // Bigrams
  for (let i = 0; i < chars.length - 1; i += 1) {
    out.push(chars[i] + chars[i + 1]);
  }
  return out;
}

/** Tokenize a query. The result carries enough information to score and
 * explain a match without re-running the tokenizer. */
export function tokenize(query: string, lang: LanguageCode): TokenizedQuery {
  const raw = query.trim();
  if (!raw) {
    return { raw: "", lang, latin: [], cjk: [], isMixed: false, synonyms: [] };
  }

  const normalized = normalize(raw);
  const stopWords = STOP_WORDS[lang];
  const latin = splitLatin(normalized, stopWords);
  const cjk = splitCjk(raw, stopWords); // CJK is already lowercased (no case)
  const isMixed = latin.length > 0 && cjk.length > 0;

  return { raw, lang, latin, cjk, isMixed, synonyms: [] };
}
