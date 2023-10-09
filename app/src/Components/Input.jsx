function Input(props){
    const { type, name, placeholder, onChange } = props;
  return (
    <div id="Input-Container">
      
      <input type={type} placeholder={placeholder} name={name} onChange={onChange} />
    </div>
  
  );
}
export default Input;

