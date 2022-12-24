import Send from "@/assets/Send";
import Button from "./Button";

interface Props {
  id: string;
}

export default function ReplyInput({ id }: Props) {
  return (
    <form className="mt-2 flex gap-2">
      <input
        className="bg-transparent p-1 w-full border-2 border-solid border-gray-300 dark:border-gray-600 rounded-md resize-none transition-[border-color] focus:border-gray-400 focus:dark:border-gray-500 focus:outline-none"
        autoComplete="off"
        name="reply"
        placeholder="Send a reply"
        maxLength={256}
      />
      <Button className="bg-blue-100 dark:bg-blue-800 hover:outline-blue-200 hover:dark:outline-blue-700">
        <Send className="m-auto dark:invert" size={16} />
      </Button>
    </form>
  );
}
