import { useLocaleContext } from '../../locale/LocaleContext';

export function Footer() {
  const { locale } = useLocaleContext();
  return (
    <footer className="flex flex-col gap-1 items-center justify-center text-grey-light py-2">
      <p>{locale['footer']['description']}</p>
      <p>
        {'Leonardo Passos '}
        <span className="text-sm">&copy; {new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}
