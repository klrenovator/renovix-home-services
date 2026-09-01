/**
 * Deep-merge helpers for content translation.
 *
 * English content objects stay the single source of structure. A translation
 * catalogue supplies the same shape with only the human-readable strings
 * replaced. `localizeContent` overlays the translation and *throws* if any leaf
 * string is missing, so a partially translated page can never be rendered with
 * English copy leaking into another language.
 */

export type DeepPartial<T> = T extends (infer Item)[]
  ? DeepPartial<Item>[]
  : T extends object
    ? { [Key in keyof T]?: DeepPartial<T[Key]> }
    : T;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Returns the dotted paths of every leaf string in `base` that is missing,
 * empty, or (optionally) identical to the English source in `translation`.
 */
export function findMissingStrings(
  base: unknown,
  translation: unknown,
  path = "",
): string[] {
  const missing: string[] = [];

  if (Array.isArray(base)) {
    if (!Array.isArray(translation)) {
      missing.push(`${path || "(root)"} — expected an array`);
      return missing;
    }

    if (translation.length !== base.length) {
      missing.push(
        `${path || "(root)"} — expected ${base.length} items, found ${translation.length}`,
      );
      return missing;
    }

    base.forEach((item, index) => {
      missing.push(
        ...findMissingStrings(item, translation[index], `${path}[${index}]`),
      );
    });

    return missing;
  }

  if (typeof base === "string") {
    if (typeof translation !== "string" || translation.trim() === "") {
      missing.push(`${path || "(root)"} — untranslated`);
    }

    return missing;
  }

  if (isRecord(base)) {
    const translationRecord = isRecord(translation) ? translation : {};

    for (const key of Object.keys(base)) {
      missing.push(
        ...findMissingStrings(
          base[key],
          translationRecord[key],
          path ? `${path}.${key}` : key,
        ),
      );
    }

    return missing;
  }

  return missing;
}

/** Deep-copies `base` and overlays every string/array/object from `translation`. */
export function mergeTranslation<T>(base: T, translation: DeepPartial<T>): T {
  if (Array.isArray(base)) {
    const items: unknown[] = Array.isArray(translation) ? translation : [];

    const merged = base.map((item, index) =>
      mergeTranslation(item, items[index] as DeepPartial<unknown>),
    );

    return merged as unknown as T;
  }

  if (isRecord(base)) {
    const source: Record<string, unknown> = isRecord(translation)
      ? translation
      : {};
    const result: Record<string, unknown> = { ...base };

    for (const key of Object.keys(base)) {
      if (key in source) {
        result[key] = mergeTranslation(
          base[key],
          source[key] as DeepPartial<unknown>,
        );
      }
    }

    return result as T;
  }

  if (typeof base === "string") {
    const value = translation as unknown;
    return (typeof value === "string" && value.trim() !== ""
      ? value
      : base) as unknown as T;
  }

  return base;
}

/**
 * Merges a translation onto the English base, refusing to return a mixed-language
 * object. `label` is used in the error so a build failure points straight at the
 * catalogue that needs finishing.
 */
export function localizeContent<T>(
  base: T,
  translation: DeepPartial<T> | undefined,
  label: string,
): T {
  if (!translation) {
    throw new Error(`[i18n] Missing translation for ${label}`);
  }

  const missing = findMissingStrings(base, translation);

  if (missing.length > 0) {
    throw new Error(
      `[i18n] Incomplete translation for ${label}: ${missing.length} untranslated field(s) — ${missing
        .slice(0, 12)
        .join(", ")}${missing.length > 12 ? ", …" : ""}`,
    );
  }

  return mergeTranslation(base, translation);
}
