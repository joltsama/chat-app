import clsx from "clsx";
import { MdOutlineQuickreply } from "react-icons/md";

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
        "rounded-full absolute border-2 px-2 py-1 hover:bg-stone-200  align-top ml-[-1.75rem]",
        "text-sm bg-stone-100 text-stone-700  cursor-pointer ml-2 hidden",
        own && "text-right"
      )}
    >
      <MdOutlineQuickreply size={16} />
    </button>
  );
}
