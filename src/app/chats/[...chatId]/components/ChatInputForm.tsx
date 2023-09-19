import React from "react";
import MessageInput from "./MessageInput";
import MessageSendButton from "./MessageSendButton";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

interface ChatInputFormProps {
  onSubmit: (_: any) => void;
  className?: string;
}

function ChatInputForm({ onSubmit, className }: ChatInputFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const _onSubmit: SubmitHandler<FieldValues> = (data, event) => {
    event?.preventDefault();
    setValue("message", "", { shouldValidate: true });
    onSubmit(data);
  };

  return (
    <form className={className} onSubmit={handleSubmit(_onSubmit)}>
      <MessageInput id="message" register={register} required={true} />
      <MessageSendButton />
    </form>
  );
}

export default ChatInputForm;
