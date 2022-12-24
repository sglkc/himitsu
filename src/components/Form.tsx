import Mail from '@/assets/Mail';
import Send from '@/assets/Send';
import Button from './Button';

interface Props {
  className?: string;
}

export default function Form({ className }: Props) {
  return (
    <form className={'bg-stone-50 dark:bg-gray-800 p-4 mx-auto rounded-md max-w-xl transition-[background-color] ' + className}>
      <label className="mb-2 block text-lg font-bold text-center">Send an anonymous message to me!</label>
      <textarea
        className="bg-transparent p-1 w-full border-2 border-solid border-gray-300 dark:border-gray-600 rounded-md resize-none transition-[border-color] focus:border-gray-400 focus:dark:border-gray-500 focus:outline-none"
        name="message"
        placeholder="Start typing here"
        maxLength={255}
      />
      <p className="mb-2">
        <small>
          <strong>Send Privately</strong> hides your message, but you won't be
          able to receive any replies!
        </small>
      </p>
      <div className="flex justify-between">
        <Button className="bg-zinc-200 dark:bg-zinc-900 hover:outline-zinc-300 hover:dark:outline-zinc-600">
          <Mail className="m-auto dark:invert" size={18} />
          Send Privately
        </Button>
        <Button className="bg-blue-100 dark:bg-blue-800 hover:outline-blue-200 hover:dark:outline-blue-600">
          Send
          <Send className="m-auto dark:invert" size={18} />
        </Button>
      </div>
    </form>
  );
}
