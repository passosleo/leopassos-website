import GlobeIcon from '/globe_icon.svg';
import { useTranslator } from './hooks/useTranslator';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export function Translator() {
  const { locale, handleTranslate, isChangingLanguage } = useTranslator();

  return (
    <div
      className="group fixed bottom-5 right-5 bg-yellow text-black cursor-pointer p-2 rounded-full shadow-lg flex items-center font-bold select-none z-50"
      onClick={handleTranslate}
    >
      <img
        src={GlobeIcon}
        alt="Idioma"
        className={`w-7 h-7 ${isChangingLanguage ? 'animate-flip' : ''}`}
      />

      <div className="flex items-center w-0 group-hover:w-28 transition-all">
        <p
          className={`hidden group-hover:block mx-auto transition-transform ${
            isChangingLanguage ? 'animate-flip' : ''
          }`}
        >
          {locale['language']}
        </p>

        <AutorenewIcon
          className={`invisible group-hover:visible transition-all ml-auto ${
            isChangingLanguage ? 'animate-custom-spin' : ''
          }`}
        />
      </div>
    </div>
  );
}
