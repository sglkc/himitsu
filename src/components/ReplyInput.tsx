import { FormEvent, useRef, useState } from 'react';
import axios from 'axios';
import Send from '@/assets/Send';
import Alert, { Props as AlertProps } from './Alert';
import Button from './Button';
import Repeat from '@/assets/Repeat';

interface Props {
  id: string;
  addReply: Function;
}

export default function ReplyInput({ id, addReply }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertProps | false>(false);
  const message = useRef<HTMLInputElement>(null);

  function submitReply(e: FormEvent) {
    e.preventDefault();

    if (loading) return;
    if (!message.current?.value.trim().length) return setAlert({
      text: 'It\'s still empty',
      error: true
    });

    setAlert(false);
    setLoading(true);

    axios
      .post(
        '/.netlify/functions/reply',
        { id, text: message.current!.value },
        { headers: { authorization: localStorage.getItem('himitsu_password') }}
      )
      .then((res) => addReply({
        owner: res.data.owner,
        text: res.data.message
      }))
      .catch(() => setAlert({
        text: 'An unexpected error has occured :(',
        error: true
      }))
      .finally(() => setLoading(false));
  }

  return (
    <>
      <form className="mt-2 flex gap-2" onSubmit={submitReply}>
        { loading ?
          <Repeat
            className="-mt-2 mx-auto dark:invert animate-spin"
            size={24}
          />
          :
          <>
            <input
              ref={message}
              className="bg-transparent p-1 w-full border-2 border-solid border-gray-300 dark:border-gray-600 rounded-md resize-none transition-[border-color] focus:border-gray-400 focus:dark:border-gray-500 focus:outline-none"
              autoComplete="off"
              name="reply"
              placeholder="Send a reply"
              maxLength={256}
              required={true}
            />
            <Button
              className="bg-blue-100 dark:bg-blue-800 hover:outline-blue-200 hover:dark:outline-blue-700"
            >
              <Send className="m-auto dark:invert" size={16} />
            </Button>
          </>
        }
      </form>
      { alert && <Alert className="text-sm" {...alert} /> }
      </>
  );
}
