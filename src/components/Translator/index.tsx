import GlobeIcon from '/globe_icon.svg';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export function Translator() {
  return (
    <div className="fixed bottom-5 right-5 bg-yellow text-black cursor-pointer p-2 rounded-full shadow-lg flex gap-2 items-center font-bold select-none z-50">
      <img src={GlobeIcon} alt="Idioma" className="w-10 h-10" />

      <p>English</p>
      <ExpandLessIcon />
    </div>
  );
}
