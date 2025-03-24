import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobileScreen = () => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }
  };

  useEffect(() => {
    checkMobileScreen();

    window.addEventListener('resize', checkMobileScreen);

    return () => {
      window.removeEventListener('resize', checkMobileScreen);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
