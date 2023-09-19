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
        ring-stone-600 
        py-2 
        px-4 
        rounded-l-md
      "
      {...register(id, { required })}
      id={id}
      type={type || "text"}
      placeholder={placeholder || "Type message here..."}
    />
  );
}

export default MessageInput;
