import { useEffect, useState } from 'react';

export function useNavBar() {
  const [isOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('about');
  const [visibleElement, setVisibleElement] = useState<string | null>(null);

  function handleOnLinkClick(label: string) {
    setSelectedLink(label);
    if (isOpen) setIsMenuOpen(false);
  }

  function checkVisibility() {
    const elementIds = ['about', 'experience', 'skills', 'contact'];
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    for (const id of elementIds) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= windowHeight - 250 && rect.bottom - 250 >= 0) {
          setVisibleElement(id);
          break; // Sair do loop após encontrar o primeiro elemento visível
        }
      }
    }
  }

  useEffect(() => {
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return {
    isOpen,
    setIsMenuOpen,
    selectedLink,
    handleOnLinkClick,
    visibleElement,
  };
}
