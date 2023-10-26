import { useEffect, useState } from 'react';
import { Link } from '../../../../../types/types';

type Props = {
  links: Link[];
};

export function useNavBar({ links }: Props) {
  const defaultActive = links[0].href;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [autoScrolling, setAutoScrolling] = useState(false);
  const [selectedLink, setSelectedLink] = useState(defaultActive);
  const [activeLink, setActiveLink] = useState(defaultActive);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function handleOnLinkClick(href: string) {
    setSelectedLink(href);
    setAutoScrolling(true);
    if (isMenuOpen) setIsMenuOpen(false);
  }

  useEffect(() => {
    function observeElementVisibility() {
      const elementIds = links.map((link) => link.href);
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      for (const [index, id] of elementIds.entries()) {
        const element = document.querySelector(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const topThreshold = index === 0 ? 0 : 250;
          const bottomThreshold = index === elementIds.length - 1 ? 0 : 500;

          if (
            rect.top <= windowHeight - topThreshold &&
            rect.bottom - bottomThreshold >= 0
          ) {
            if (autoScrolling && id === selectedLink) {
              setTimeout(() => {
                setAutoScrolling(false);
                setActiveLink(id);
              }, 100);
            }

            if (!autoScrolling) {
              setActiveLink(id);
            }
            break;
          }
        }
      }
    }

    observeElementVisibility();
    window.addEventListener('scroll', observeElementVisibility);
    return () => {
      window.removeEventListener('scroll', observeElementVisibility);
    };
  }, [links, autoScrolling, selectedLink]);

  return {
    isMenuOpen,
    toggleMenu,
    activeLink,
    selectedLink,
    handleOnLinkClick,
  };
}
