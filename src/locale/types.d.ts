import * as locale from './locale.json';

export type LocaleContext = {
  locale: typeof locale.en | typeof locale.pt;
};
