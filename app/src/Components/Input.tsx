import React from "react";
interface InputElementProps {
  type: string;
  placeholder: string;

  id: string;
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
class InputElement extends React.Component<InputElementProps> {
  render() {
    const { type, placeholder, onChange, id, name, label } = this.props;
    return (
      <div id="Input-conatiner">
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          id={id}
          name={name}
        />
      </div>
    );
  }
}
export default InputElement;

// import React from "react";
// interface inputProps {
//   label: string;
//   type: string;
//   name: string;
//   placeholder: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }
// function Input({ label, type, name, placeholder, onChange }: inputProps) {
//   return (
//     <div>
//       <label>{label}</label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         name={name}
//         onChange={onChange}
//       />
//     </div>
//   );
// }
// export default Input;
