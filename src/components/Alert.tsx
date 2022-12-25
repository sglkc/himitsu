export interface Props {
  className?: string;
  error?: boolean;
  text: string;
}

export default function Alert({ className, error, text }: Props) {
  const background = error
    ? 'bg-red-200 dark:bg-rose-900'
    : 'bg-blue-200 dark:bg-blue-900';

  return (
    <div
      className={
      background + ' ' + className +
        ' px-4 py-2 rounded-md transition-[background-color] animate-[slide-down_.2s_ease-out]'
      }
    >
      <p>{ text }</p>
    </div>
  );
}
