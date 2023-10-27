import { CustomLink } from '../../components/CustomLink';
import { useLocaleContext } from '../../locale/LocaleContext';

export function Footer() {
  const { locale } = useLocaleContext();
  return (
    <footer className="flex flex-col gap-1 items-center justify-center text-grey-light py-2 text-sm">
      <p>{locale['footer']['description']}</p>
      <div className="flex items-center gap-1">
        <CustomLink href="https://github.com/passosleo" target="_blank">
          Leonardo Passos
        </CustomLink>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
