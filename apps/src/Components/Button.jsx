function Button(props) {
  const { text, onClick } = props;
  return (
    <div id="Button-Container">
      <button type="submit" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
export default Button;
