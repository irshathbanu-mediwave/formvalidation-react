function Button(props) {
  const { label, id, type } = props;
  return (
    <div id="Button-Container">
      <button type={type} id={id}>
        {label}
      </button>
    </div>
  );
}
export default Button;
