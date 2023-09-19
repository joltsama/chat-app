import React from "react";
import { LuSendHorizonal } from "react-icons/lu";

function MessageSendButton() {
  return (
    <button
      type="submit"
      className="
      dark:bg-stone-700
      dark:text-white w-10
      border-stone-600
        rounded-r-md
        text-center
        px-3 transition
      "
    >
      <LuSendHorizonal size={16} />
    </button>
  );
}

export default MessageSendButton;
