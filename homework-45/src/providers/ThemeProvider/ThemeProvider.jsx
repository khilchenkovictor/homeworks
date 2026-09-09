import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function ThemeProvider() {
  const theme = useSelector(state => state.theme);
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  return null;
}

export default ThemeProvider;
