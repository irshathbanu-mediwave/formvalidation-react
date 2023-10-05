import { useState } from "react";
import { Input, Button } from "./Components";
import "./App.css";
function App() {
  const [formdata, setFormdata] = useState({
    title: "",
    discription: "",
    url: "",
    rating: 0,
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((form) => ({
      ...form,
      [name]: value,
    }));
  };
  const onClick = () => {
    console.log(formdata);
  };
  return (
    <>
      <div>
        <Input
          label="Movie Name"
          type="text"
          placeholder="title"
          name="title"
          onChange={onChange}
        />
        <Input
          label="Discription"
          type="text"
          placeholder="discription"
          name="discription"
          onChange={onChange}
        />
        <Input
          label="Image Url"
          type="text"
          placeholder="url"
          name="url"
          onChange={onChange}
        />
        <Input
          label="Rating"
          type="number"
          placeholder="rating"
          name="rating"
          onChange={onChange}
        />
      </div>
      <div>
        <Button onClick={onClick} text="Submit" />
      </div>
    </>
  );
}
export default App;
