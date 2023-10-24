import { useState } from 'react';
import GlobeIcon from '/globe_icon.svg';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useLocaleContext } from '../../locale/LocaleContext';

export function Translator() {
  const { handleLocaleChange } = useLocaleContext();

  return (
    <div
      className="group fixed bottom-5 right-5 bg-yellow text-black cursor-pointer p-2 rounded-full shadow-lg flex items-center font-bold select-none z-50"
      onClick={() => handleLocaleChange('en')}
    >
      <img src={GlobeIcon} alt="Idioma" className="w-7 h-7" />

      <div className="flex items-center justify-evenly w-0 opacity-0 group-hover:w-28 group-hover:opacity-100 transition-all">
        <p className="hidden group-hover:block transition-all">Português</p>
        <ExpandLessIcon className="hidden group-hover:block transition-all" />
      </div>
    </div>
  );
}
