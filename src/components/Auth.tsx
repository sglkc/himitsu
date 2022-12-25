import { useContext } from 'react';
import axios from 'axios';
import { UpdateContext } from '@/App';

// PEAK AUTHORIZATION COMPONENT HERE!! (password literally stored in plain text)

export default function Auth() {
  const shouldUpdate = useContext(UpdateContext);

  function onClick() {
    const password = window.prompt('You\'ve found the secret button!');

    if (!password || !password.trim().length) {
      localStorage.removeItem('himitsu_password');
      shouldUpdate(true);
      return;
    }

    axios
      .get('/.netlify/functions/auth', {
        headers: { authorization: password }
      })
      .then(() => {
        shouldUpdate(true);
        localStorage.setItem('himitsu_password', password);
      })
      .catch(() => window.alert('Nice try bro'));
  }

  return (
    <h1 className="my-auto text-xl font-bold" onClick={onClick}>
      himitsu | ヒミツ
    </h1>
  );
}
