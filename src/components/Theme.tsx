import { useEffect, useState } from 'react';
import Sun from '@/assets/Sun';
import Moon from '@/assets/Moon';

export default function Theme() {
  const [dark, setDark] = useState(localStorage.theme === 'dark');
  const classList = document.documentElement.classList;

  useEffect(() => {
    localStorage.theme = dark ? 'dark' : 'light';

    if (dark) classList.add('dark');
    else classList.remove('dark');
  }, [dark]);

  return (
    <>
      <button onClick={() => setDark(!dark)}>
        { dark ? <Moon size={32} color="white" /> : <Sun size={32} /> }
      </button>
    </>
  );
}
