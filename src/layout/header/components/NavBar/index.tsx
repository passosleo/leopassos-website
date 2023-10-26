import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '../../../../types/types';
import { CustomLink } from '../../../../components/CustomLink';
import { useNavBar } from './hooks/useNavBar';
import { twMerge } from 'tailwind-merge';

type Props = {
  links: Link[];
};

export function NavBar({ links }: Props) {
  const { isTabletOrMobile } = useMediaQuery();
  const { isMenuOpen, handleOnLinkClick, toggleMenu, activeLink } = useNavBar({
    links,
  });

  function renderLinks() {
    return links.map(({ label, href, onClick }, index) => (
      <CustomLink
        key={index}
        href={href}
        onClick={() => {
          handleOnLinkClick(href);
          if (onClick) onClick();
        }}
        isSelected={activeLink === href}
        className="hover:text-white text-lg"
      >
        {label}
      </CustomLink>
    ));
  }

  if (isTabletOrMobile) {
    return (
      <>
        <MenuIcon
          fontSize="large"
          className="cursor-pointer"
          onClick={toggleMenu}
        />

        <div
          onClick={toggleMenu}
          className={twMerge(
            'top-0 w-full h-full right-0 z-10 bg-black cursor-pointer',
            isMenuOpen ? 'fixed fade-in' : 'hidden fade-out',
          )}
        />

        <nav
          className={twMerge(
            'fixed top-0 right-0 px-8 h-full bg-grey-dark flex flex-col gap-5 items-center justify-center z-20',
            isMenuOpen ? 'navbar-active' : 'navbar-inactive',
          )}
        >
          {renderLinks()}
        </nav>
      </>
    );
  }

  return (
    <nav className="flex gap-20 items-center justify-end">{renderLinks()}</nav>
  );
}
