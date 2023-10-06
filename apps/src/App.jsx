import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";
const validationSchema= Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      url: Yup.string().url("Invalid URL").required("URL is required"),
      rating: Yup.number().required("Rating is required").min(1, "Rating must be at least 1").max(10, "Rating must be at most 10"),
    });
function App() {
  const [formdata, setFormdata] = useState([]);
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      url: "",
      rating: 0,
    },
     
    validationSchema,
    onSubmit: (values) => {
      const Moviecard={
        title:values.title,
        description:values.description,
        url:values.url,
        rating:values.rating
      };
     setFormdata([...formdata,Moviecard])
      console.log(values);
      formik.resetForm();
    
    },
  });

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Movie Name</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            id="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title && <div>{formik.errors.title}</div>}

          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="description"
            name="description"
            id="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && <div>{formik.errors.description}</div>}

          <label htmlFor="url">Image URL</label>
          <input
            type="text"
            placeholder="url"
            name="url"
            id="url"
            onChange={formik.handleChange}
            value={formik.values.url}
          />
          {formik.errors.url && <div>{formik.errors.url}</div>}

          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            placeholder="rating"
            name="rating"
            id="rating"
            onChange={formik.handleChange}
            value={formik.values.rating}
          />
          {formik.errors.rating && <div>{formik.errors.rating}</div>}

          <button type="submit">Add Card</button>
              
    </form>
       </div>
       {formdata.length>0 &&(
       <div id="movie-card">
         {formdata.map((movie,index)=>(
        <div id="card " key={index}>
          <h2>{movie.title}  </h2>
           <h2>{movie.description}  </h2>
            <img  src={movie.url}/>
             <h2>{movie.rating} </h2>
        </div>

         )
         
        )}
        </div> 
       )}
         
    </>
  );

}

export default App;


// import { useState } from "react";
// import Input from "./Components/Input";
// import Button from "./Components/Button";
// import "./App.css";
// function App() {
//   const [formdata, setFormdata] = useState({
//     title: "",
//     discription: "",
//     url: "",
//     rating: 0,
//   });
//   const onChange = (e) => {
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
//     <>
//       <div id="Inputelement">
//         <Input label="Movie Name" type="text" placeholder="title" name="title" onChange={onChange} />
//         <Input label="Discription" type="text" placeholder="discription" name="discription" onChange={onChange} />
//         <Input label="Image Url" type="url" placeholder="url" name="url" onChange={onChange} />
//         <Input label="Rating" type="number" placeholder="rating" name="rating" onChange={onChange} />
//       </div>
//       <div id="Button-Container">
//         <Button onClick={onClick} text="Submit" />
//       </div>
//     </>
//   );
// }
// export default App;

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