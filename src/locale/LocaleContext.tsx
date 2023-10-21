import { createContext, useState, useContext } from 'react';
import * as languages from './locale.json';
import { LocaleContext as LocaleContextType } from './types';

const LocaleContext = createContext({} as LocaleContextType);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale] = useState(languages['en']);

  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  return useContext(LocaleContext);
}
