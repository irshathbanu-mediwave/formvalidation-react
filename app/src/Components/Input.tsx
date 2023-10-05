import React from "react";
interface inputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function Input({ label, type, name, placeholder, onChange }: inputProps) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </>
  );
}
export default Input;
