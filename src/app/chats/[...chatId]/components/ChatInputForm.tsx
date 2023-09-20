import React, { useEffect } from "react";
import MessageInput from "./MessageInput";
import MessageSendButton from "./MessageSendButton";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

interface ChatInputFormProps {
  onSubmit: (_: any) => void;
  className?: string;
}

export default function ChatInputForm({
  onSubmit,
  className,
}: ChatInputFormProps) {
  useEffect(() => {
    setFocus("message");
  }, []);

  const { register, setFocus, handleSubmit, setValue } = useForm<FieldValues>({
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
