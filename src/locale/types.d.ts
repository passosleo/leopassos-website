import * as locale from './locale.json';

export type LocaleContext = {
  locale: typeof locale.en | typeof locale.pt;
  selectedLocale: Locale;
  handleLocaleChange: (locale: Locale) => void;
};

type Locale = keyof typeof locale;
