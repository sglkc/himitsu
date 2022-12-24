import dayjs from 'dayjs';
import Reply from './Reply';

export default function Post({ text, timestamp, replies }: Post) {
  const time = dayjs(timestamp).format('DD/MM/YY | HH:mm');

  return (
    <div className="bg-stone-50 dark:bg-gray-800 p-4 rounded-md transition-[background-color]">
      <small className="opacity-70">{ time }</small>
      <h4 className="mt-2 mb-4 text-xl font-extrabold">{ text }</h4>
      <div className="flex flex-col gap-2">
        { replies.map((reply, i) => <Reply key={i} {...reply} />) }
      </div>
    </div>
  );
}
