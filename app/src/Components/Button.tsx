interface buttonProps {
  text: string;
  onClick: () => void;
}
function Button({ text, onClick }: buttonProps) {
  return (
    <>
      <button type="submit" onClick={onClick}>
        {text}
      </button>
    </>
  );
}
export default Button;
