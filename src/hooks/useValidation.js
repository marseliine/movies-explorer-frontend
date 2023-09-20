import { useEffect, useState } from "react";

const Logic = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const setWindowDimensions = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    }
  }, [windowWidth]);

  let device = '';

  if (windowWidth > 300) device = 'isMobile';
  if (windowWidth > 480) device = 'isTablet';
  if (windowWidth > 920) device = 'isDesktop';

  return device;
}

export const useMobileDetect = () => Logic() === 'isMobile' ? true : false;
export const useTabletDetect = () => Logic() === 'isTablet' ? true : false;
export const useGadgets = () => Logic() === 'isMobile' || 'isTablet' ? true : false;

export const useValidation = () => {
  switch (Logic()) {
    case 'isMobile':
      return 'mobile';
    case 'isTablet':
      return 'tablet';
    case 'isDesktop':
      return 'desktop';
    default:
      return '';
  }
}