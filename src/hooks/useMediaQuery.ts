import { useMediaQuery as defineMediaQuery } from 'react-responsive';

export function useMediaQuery() {
  const isDesktopOrLaptop = defineMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = defineMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = defineMediaQuery({ query: '(max-width: 1024px)' });
  const isPortrait = defineMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = defineMediaQuery({ query: '(min-resolution: 2dppx)' });

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isRetina,
  };
}
