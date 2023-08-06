import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '../../../../@types/types';
import { CustomLink } from '../../../../components/custom-link';
import { useNavBar } from './hooks/useNavBar';

type Props = {
  links: Link[];
};

export function NavBar({ links }: Props) {
  const { isTabletOrMobile } = useMediaQuery();
  const { isOpen, handleOnLinkClick, selectedLink, setIsMenuOpen } = useNavBar();

  function renderLinks() {
    return links.map(({ label, href }, index) => (
      <CustomLink
        key={index}
        href={href}
        onClick={() => handleOnLinkClick(label)}
        isSelected={selectedLink === label}
        className="hover:text-white text-lg"
      >
        {label}
      </CustomLink>
    ));
  }

  if (isTabletOrMobile) {
    return (
      <>
        <MenuIcon fontSize="large" className="cursor-pointer" onClick={() => setIsMenuOpen(!isOpen)} />

        <div
          onClick={() => setIsMenuOpen(false)}
          className={`${
            isOpen ? 'fixed fade-in' : 'hidden fade-out'
          } top-0 w-full h-full right-0 z-10 bg-black cursor-pointer`}
        />

        <nav
          className={`${
            isOpen ? 'navbar-active' : 'navbar-inactive'
          } fixed top-0 right-0 p-4 h-full bg-grey-dark flex flex-col gap-5 items-center justify-center z-20`}
        >
          {renderLinks()}
        </nav>
      </>
    );
  }

  return <nav className="flex gap-20 items-center justify-end">{renderLinks()}</nav>;
}
