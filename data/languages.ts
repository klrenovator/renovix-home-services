export type LanguageCode = "en" | "ms" | "zh";

export type Language = {
  code: LanguageCode;
  nativeLabel: string;
  label: string;
  htmlLang: string;
  enabled: boolean;
};

export const languages: Language[] = [
  {
    code: "en",
    nativeLabel: "EN",
    label: "English",
    htmlLang: "en",
    enabled: true,
  },
  {
    code: "ms",
    nativeLabel: "BM",
    label: "Bahasa Melayu",
    htmlLang: "ms",
    enabled: true,
  },
  {
    code: "zh",
    nativeLabel: "中文",
    label: "Chinese",
    htmlLang: "zh",
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

export function getDefaultLanguage(): Language {
  return languages[0];
}
