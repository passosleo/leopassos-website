import { useState } from 'react';
import { useLocaleContext } from '../../../locale/LocaleContext';

export function useTranslator() {
  const { locale, selectedLocale, handleLocaleChange } = useLocaleContext();
  const [isChangingLanguage, setChangingLanguage] = useState(false);

  function handleTranslate() {
    if (!isChangingLanguage) {
      setChangingLanguage(true);
      setTimeout(() => {
        setChangingLanguage(false);
      }, 500);
    }

    handleLocaleChange(selectedLocale === 'en' ? 'pt' : 'en');
  }

  return {
    locale,
    handleTranslate,
    isChangingLanguage,
  };
}
