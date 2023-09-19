import React from "react";

// TODO better here
function Input({ name, id, value, onChange, type, placeholder }: any) {
  return (
    <input
      className="w-full"
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
