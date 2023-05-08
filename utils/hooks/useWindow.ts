import { useState, useEffect } from 'react';

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(1920);
  useEffect(() => setWindowWidth(window.innerWidth), []);
  return windowWidth;
}
