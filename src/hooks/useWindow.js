import { useState, useEffect } from 'react';

function useWindow() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const onResize = (e) => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return { windowWidth, windowHeight };
}

export default useWindow;
