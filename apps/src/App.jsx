import { useState } from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";
import "./App.css";
function App() {
  const [formdata, setFormdata] = useState({
    title: "",
    discription: "",
    url: "",
    rating: 0,
  });
  const onChange = (e) => {
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
      <div id="Inputelement">
        <Input label="Movie Name" type="text" placeholder="title" name="title" onChange={onChange} />
        <Input label="Discription" type="text" placeholder="discription" name="discription" onChange={onChange} />
        <Input label="Image Url" type="url" placeholder="url" name="url" onChange={onChange} />
        <Input label="Rating" type="number" placeholder="rating" name="rating" onChange={onChange} />
      </div>
      <div id="Button-Container">
        <Button onClick={onClick} text="Submit" />
      </div>
    </>
  );
}
export default App;

// import { useState } from "react";
// import { Formik } from "formik";
// import "./App.css";
// import { InputElement, ButtonElement } from "./Components";
// function App() {
//   const [formdata, setFormdata] = useState({
//     title: "",
//     discription: "",
//     url: "",
//     rating: 0,
//   });
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormdata((form) => ({
//       ...form,
//       [name]: value,
//     }));
//   };
//   const onClick = () => {
//     console.log(formdata);
//   };
//   return (
//     <Formik >
//       <form>
//         <div id="Content">
//           <InputElement
//             label="Moviename"
//             type="text"
//             placeholder="title"
//             name="title"
//             id="title"
//             onChange={onChange}
//           />
//           <InputElement
//             label="Discription"
//             type="text"
//             placeholder="discription"
//             name="discription"
//             id="title"
//             onChange={onChange}
//           />
//           <InputElement
//             label="Image Url"
//             type="text"
//             placeholder="url"
//             name="url"
//             id="url"
//             onChange={onChange}
//           />
//           <InputElement
//             label="Rating"
//             type="number"
//             placeholder="rating"
//             name="rating"
//             id="url"
//             onChange={onChange}
//           />
//         </div>
//         <div id="Sumitbtn">
//           <ButtonElement onClick={onClick} label="Submit" id="Submitbtn" />
//         </div>
//       </form>
//     </Formik>
//   );
// }
// export default App;