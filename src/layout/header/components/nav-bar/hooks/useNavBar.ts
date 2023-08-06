import { useState } from 'react';

export function useNavBar() {
  const [isOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('about');

  function handleOnLinkClick(label: string) {
    setSelectedLink(label);
    if (isOpen) setIsMenuOpen(false);
  }

  return {
    isOpen,
    setIsMenuOpen,
    selectedLink,
    handleOnLinkClick,
  };
}
