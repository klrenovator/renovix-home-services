export type LanguageCode = "en" | "ms" | "zh";

export type Language = {
  /** URL prefix, e.g. `/en/`, `/ms/`, `/zh/`. */
  code: LanguageCode;
  /** Label shown in the switcher, written in the language itself. */
  nativeLabel: string;
  /** Label written in English, for accessible names and metadata. */
  label: string;
  /** Value used for the `lang` attribute on `<html>` and language links. */
  htmlLang: string;
  /** BCP 47 tag used for `hreflang` alternates. */
  hreflang: string;
  /** Value used for `og:locale`. */
  ogLocale: string;
  enabled: boolean;
};

/**
 * Malaysian-market locale tags. `en-MY` / `ms-MY` / `zh-MY` tell search engines
 * that these pages target Malaysia specifically rather than a global audience.
 */
export const languages: Language[] = [
  {
    code: "en",
    nativeLabel: "EN",
    label: "English",
    htmlLang: "en-MY",
    hreflang: "en-MY",
    ogLocale: "en_MY",
    enabled: true,
  },
  {
    code: "ms",
    nativeLabel: "BM",
    label: "Bahasa Melayu",
    htmlLang: "ms-MY",
    hreflang: "ms-MY",
    ogLocale: "ms_MY",
    enabled: true,
  },
  {
    code: "zh",
    nativeLabel: "中文",
    label: "Chinese",
    htmlLang: "zh-MY",
    hreflang: "zh-MY",
    ogLocale: "zh_MY",
    enabled: true,
  },
];

export function isLanguageCode(value: string | undefined | null): value is LanguageCode {
  return value === "en" || value === "ms" || value === "zh";
}

export function getLanguage(code: string | undefined | null): Language | undefined {
  if (!code) {
    return undefined;
  }

  return languages.find((language) => language.code === code);
}

export function getLanguageCode(code: string | undefined | null): LanguageCode {
  return isLanguageCode(code) ? code : getDefaultLanguage().code;
}

export function getDefaultLanguage(): Language {
  return languages[0];
}
