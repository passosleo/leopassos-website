import { createContext, useState, useContext } from 'react';
import * as languages from './locale.json';
import { LocaleContext as LocaleContextType } from './types';
import { useLocalStorage } from '../hooks/useLocalStorage';

const LocaleContext = createContext({} as LocaleContextType);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const { getStoredData } = useLocalStorage();

  const userLocale = (navigator.language.split('-')[0] ||
    (navigator as any).userLanguage.split('-')[0]) as keyof typeof languages;

  const storedLocale = getStoredData<keyof typeof languages>('locale', 'en');

  const currentLocale = storedLocale || userLocale;

  const [locale] = useState(languages[currentLocale]);

  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  return useContext(LocaleContext);
}
