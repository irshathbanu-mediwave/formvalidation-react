import React from "react";
function Input(props) {
  const { label, type, name, placeholder, onChange } = props;
  return (
    <div id="Input-Container">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} name={name} onChange={onChange} />
    </div>
  
  );
}
export default Input;