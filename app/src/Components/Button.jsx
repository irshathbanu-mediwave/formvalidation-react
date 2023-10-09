function Button(props) {
  const { label, onClick, id } = props;
  return (
    <div id="Button-Container">
    <button  type="submit"   id={id} onClick={onClick}>
      {label}
    </button>
    </div>
  );
}
export default Button;