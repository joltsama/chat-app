import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
}

function MessageInput({
  id,
  placeholder,
  type,
  required,
  register,
}: MessageInputProps) {
  return (
    <input
      className="
        w-full 
        ring-inset 
        ring-1 
        ring-stone-300 
        focus:outline-0
        py-2 
        px-4 
        rounded-l-md
      "
      {...register(id, { required })}
      id={id}
      autoComplete={id}
      type={type || "text"}
      placeholder={placeholder || "Type message here..."}
    />
  );
}

export default MessageInput;
