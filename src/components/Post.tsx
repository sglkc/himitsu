import { useState } from 'react';
import dayjs from 'dayjs';
import Reply from './Reply';

export default function Post(props: Post) {
  const time = dayjs(props.timestamp).format('DD/MM/YYYY | HH:mm');
  const [replies, setReplies] = useState(props.replies.slice(0, 3));

  function revealReplies() {
    setReplies(props.replies);
  }

  return (
    <div className="bg-stone-50 dark:bg-gray-800 p-4 h-fit rounded-md transition-[background-color]">
      <small className="opacity-70">{ time }</small>
      <p className="mt-2 mb-4 text-xl font-extrabold">{ props.text }</p>
      <div className="flex flex-col gap-2">
        { replies.map((reply, i) => <Reply key={i} {...reply} />) }
        { replies.length < props.replies.length &&
        <div
          className="mt-2 py-1 text-center rounded-md transition-[background-color] bg-[#00000009] dark:bg-[#ffffff0f] hover:bg-[#0000000f] hover:dark:bg-[#ffffff1f] hover:cursor-pointer"
          onClick={revealReplies}
        >
          <small>Read +{ props.replies.length - replies.length } replies</small>
        </div>
        }
      </div>
    </div>
  );
}
