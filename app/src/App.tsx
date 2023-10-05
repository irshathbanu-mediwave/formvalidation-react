import { useState } from "react";
import { Formik, field } from "formik";
import "./App.css";
import { InputElement, ButtonElement } from "./Components";
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
    <Formik>
      <form>
        <div id="Content">
          <InputElement
            label="Moviename"
            type="text"
            placeholder="title"
            name="title"
            id="title"
            onChange={onChange}
          />
          <InputElement
            label="Discription"
            type="text"
            placeholder="discription"
            name="discription"
            id="title"
            onChange={onChange}
          />
          <InputElement
            label="Image Url"
            type="text"
            placeholder="url"
            name="url"
            id="url"
            onChange={onChange}
          />
          <InputElement
            label="Rating"
            type="number"
            placeholder="rating"
            name="rating"
            id="url"
            onChange={onChange}
          />
        </div>
        <div id="Sumitbtn">
          <ButtonElement onClick={onClick} label="Submit" id="Submitbtn" />
        </div>
      </form>
    </Formik>
  );
}
export default App;
