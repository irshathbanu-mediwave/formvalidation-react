interface ButtonElementProps {
  label: string;
  onClick: () => void;
  id: string;
}
function ButtonElement(props: ButtonElementProps) {
  const { label, onClick, id } = props;
  return (
    <button  type="submit"   id={id} onClick={onClick}>
      {label}
    </button>
  );
}
export default ButtonElement;

// interface buttonProps {
//   text: string;
//   onClick: () => void;
// }
// function Button({ text, onClick }: buttonProps) {
//   return (
//     <button type="submit" onClick={onClick}>
//       {text}
//     </button>
//   );
// }
// export default Button;
