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
        `
        absolute
        top-1
        rounded-full 
        border-2 
        px-2 
        py-1
        ml-[-1.75rem]
        text-sm
        cursor-pointer 
        hidden
        text-stone-700  
        bg-stone-100
        hover:bg-stone-200 align-top 
        `,
        own && "text-right"
      )}
    >
      <MdOutlineQuickreply size={16} />
    </button>
  );
}
