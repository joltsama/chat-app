import React from "react";

interface MessageInputProps {
  id: string;
}

function MessageInput({ id }: MessageInputProps) {
  return (
    <input
      className="w-full ring-1 ring-cyan-200 py-2 px-4 rounded-md"
      id={id}
      name="message"
      type="text"
      placeholder="Message"
    />
  );
}

export default MessageInput;
