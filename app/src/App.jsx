import React, { useState } from 'react'; 
import Button from "./Components/Button";
import Input from "./Components/Input";
function App() {
  const [item, setItem] = useState(""); 
  const handleChange = (e) => {
    setItem(e.target.value); 
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Item:", item);
  };
  return (
    <div id="form-container">
      <form onSubmit={handleSubmit}> 
        <Input
          type="text"
          placeholder="Enter the value"
          name="item"
          onChange={handleChange}
          value={item}
        />
        <Button type="submit" label="Add" /> 
      </form>
    </div>
  );
}
export default App;