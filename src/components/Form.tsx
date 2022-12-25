import { useContext, useRef, useState } from 'react';
import axios from 'axios';
import { UpdateContext } from '@/App';
import Mail from '@/assets/Mail';
import Repeat from '@/assets/Repeat';
import Send from '@/assets/Send';
import Alert, { Props as AlertProps } from './Alert';
import Button from './Button';

interface Props {
  className?: string;
}

export default function Form({ className }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertProps | false>(false);
  const shouldUpdate = useContext(UpdateContext);
  const message = useRef<HTMLTextAreaElement>(null);

  function sendPost(isPrivate: Boolean = false) {
    if (loading) return;
    if (!message.current?.value.trim().length) return setAlert({
      text: 'At least write something first, duh',
      error: true
    });

    setAlert(false);
    setLoading(true);

    axios
      .post('/.netlify/functions/post', {
        message: message.current!.value,
        private: isPrivate
      })
      .then(() => {
        message.current!.value = '';
        shouldUpdate(true);
        setAlert({ text: 'Thank you for the message!' });
      })
      .catch(() => setAlert({
        text: 'An unexpected error has occured :(',
        error: true
      }))
      .finally(() => setLoading(false));
  }

  return (
    <div
      className={'bg-stone-50 dark:bg-gray-800 p-4 mx-auto rounded-md max-w-xl transition-[background-color] ' + className}
    >
      <label className="mb-4 block text-xl font-bold text-center">
        Send an anonymous message to me!
      </label>
      <textarea
        ref={message}
        className="bg-transparent p-1 w-full border-2 border-solid border-gray-300 dark:border-gray-600 rounded-md resize-none transition-[border-color] focus:border-gray-400 focus:dark:border-gray-500 focus:outline-none"
        name="message"
        placeholder="Type here"
        disabled={loading}
        maxLength={128}
        rows={3}
      />
      <p className="mb-2">
        <small>
          <strong>Send Privately</strong> hides your message, but you won't be
          able to receive any replies!
        </small>
      </p>
      <div className="flex justify-between">
        <Button
          className="bg-zinc-200/50 dark:bg-zinc-900 enabled:hover:outline-zinc-300 enabled:hover:dark:outline-zinc-700"
          disabled={loading}
          onClick={() => sendPost(true)}
        >
          <Mail className="m-auto dark:invert" size={18} />
          Send Privately
        </Button>
        <Button
          className="bg-blue-100 dark:bg-blue-800 enabled:hover:outline-blue-200 enabled:hover:dark:outline-blue-700"
          disabled={loading}
          onClick={() => sendPost()}
        >
          Send
          <Send className="m-auto dark:invert" size={18} />
        </Button>
      </div>
      { alert && <Alert className="mt-3" {...alert} /> }
      { loading &&
        <Repeat className="mt-4 mx-auto dark:invert animate-spin" size={32} />
      }
    </div>
  );
}
