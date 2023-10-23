import { createContext, useState, useContext } from 'react';
import * as languages from './locale.json';
import { Locale, LocaleContext as LocaleContextType } from './types';
import { useLocalStorage } from '../hooks/useLocalStorage';

const LocaleContext = createContext({} as LocaleContextType);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const { getStoredData } = useLocalStorage();

  const userLocale = (navigator.language.split('-')[0] ||
    (navigator as any).userLanguage.split('-')[0]) as Locale;

  const isUserLocaleValid = Object.keys(languages).includes(userLocale);

  const storedLocale = getStoredData<Locale>('locale');

  const currentLocale = storedLocale || (isUserLocaleValid ? userLocale : 'en');

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
