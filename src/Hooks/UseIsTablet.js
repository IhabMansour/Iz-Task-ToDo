import { useState, useEffect } from 'react';
const useIsTablet = () => {
    const [useIsTablet, setUseIsTablet] = useState(false);
    const checkTabletScreen = () => {
        setUseIsTablet(window.innerWidth <= 1024);
    };
    useEffect(() => {
        checkTabletScreen();
        window.addEventListener('resize', checkTabletScreen);
        return () => {
            window.removeEventListener('resize', checkTabletScreen);
        };
    }, []);
    return useIsTablet;
};
export default useIsTablet;
