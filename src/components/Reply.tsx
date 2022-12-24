import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(RelativeTime);

export default function Reply({ owner, text, timestamp }: Reply) {
  const time = dayjs(timestamp).fromNow();
  const className = owner ? 'border-sky-500' : 'border-slate-500';

  return (
    <blockquote
      className={className + ' pl-4 border-l-2 transition-[border-color]'}
    >
      <p>
        { text }
        <small className="ml-2 opacity-50 whitespace-nowrap">{ time }</small>
      </p>
    </blockquote>
  );
}
