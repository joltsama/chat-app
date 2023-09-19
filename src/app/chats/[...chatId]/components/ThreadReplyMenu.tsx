import clsx from "clsx";
import { HiReply } from "react-icons/hi";

interface ThreadReplyMenuProps {
  own?: boolean;
  onClick: () => void;
}

export default function ThreadReplyMenu({
  own,
  onClick,
}: ThreadReplyMenuProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "rounded-full absolute border p-1 hover:bg-stone-200  align-top ml-[-1.75rem]",
        "text-sm bg-stone-100 text-stone-500  cursor-pointer ml-2 hidden",
        own && "text-right"
      )}
    >
      <HiReply size={20} />
    </button>
  );
}
