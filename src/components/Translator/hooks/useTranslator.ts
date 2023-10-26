import { useState } from 'react';
import { useLocaleContext } from '../../../locale/LocaleContext';

export function useTranslator() {
  const { locale, selectedLocale, handleLocaleChange } = useLocaleContext();
  const [isSwitchIconRotating, setSwitchIconRotating] = useState(false);

  function handleTranslate() {
    if (!isSwitchIconRotating) {
      setSwitchIconRotating(true);
      setTimeout(() => {
        setSwitchIconRotating(false);
      }, 500);
    }

    handleLocaleChange(selectedLocale === 'en' ? 'pt' : 'en');
  }

  return {
    locale,
    handleTranslate,
    isSwitchIconRotating,
  };
}
