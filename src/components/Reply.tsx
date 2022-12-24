import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(RelativeTime);

export default function Reply({ owner, text, timestamp }: Reply) {
  const time = dayjs(timestamp).format('DD/MM/YYYY HH:mm');
  const relative = dayjs(timestamp).fromNow();
  const className = owner ? 'border-sky-500' : 'border-gray-500';

  return (
    <blockquote
      className={'pl-4 border-l-2 transition-[border-color] flex justify-between gap-2 ' + className}
    >
      <p>{ text }</p>
      <small className="opacity-50 whitespace-nowrap" title={time}>
        { relative }
      </small>
    </blockquote>
  );
}
