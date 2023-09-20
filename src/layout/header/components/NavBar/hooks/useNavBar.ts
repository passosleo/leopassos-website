import { useEffect, useState } from 'react';

export function useNavBar() {
  const [isOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('about');
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [autoScrolling, setAutoScrolling] = useState(false);

  function handleOnLinkClick(label: string) {
    setSelectedLink(label);
    setAutoScrolling(true);
    if (isOpen) setIsMenuOpen(false);
  }

  useEffect(() => {
    function observeElementVisibility() {
      const elementIds = ['about', 'experience', 'skills', 'contact'];
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      for (const [index, id] of elementIds.entries()) {
        const element = document.getElementById(id);
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
  }, [autoScrolling, selectedLink]);

  return {
    isOpen,
    setIsMenuOpen,
    selectedLink,
    handleOnLinkClick,
    activeLink,
  };
}
