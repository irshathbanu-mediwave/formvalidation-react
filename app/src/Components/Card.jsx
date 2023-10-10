import React, { useState } from "react";

const Card = ({ values, deleteCard, updateCard }) => {
  const [isEdit, setIsEditing] = useState(false);
  const [updatedDetail, setUpdatedDetail] = useState(values.detail);

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateCard(updatedDetail); // Pass the ID along with updatedDetail
    setIsEditing(false);
  };

  return (
    <div className="card">
      {isEdit ? (
        <>
          <input
            type="text"
            value={updatedDetail}
            onChange={(e) => setUpdatedDetail(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <h3 id={values.id}> {values.detail}</h3>
          <button onClick={() => deleteCard()}>Delete</button>{" "}
          {/* Pass ID for deletion */}
          <button onClick={handleUpdateClick}>Update</button>
        </>
      )}
    </div>
  );
};

export default Card;

// import React, { useState } from "react";

// const Card = ({ values, deleteCard, UpdateCard }) => {
//   const [isEdit, setIsEditing] = useState(false);
//   const [updatedTitle, setUpdatedTitle] = useState(values.details);

//   const handleUpdateClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     UpdateCard(updatedTitle);
//     setIsEditing(false);
//   };

//   return (
//     <div className="card">
//       {isEdit ? (
//         <>
//           <input
//             type="text"
//             value={updatedTitle}
//             onChange={(e) => setUpdatedTitle(e.target.details)}
//           />
//           <button onClick={handleSaveClick}>Save</button>
//         </>
//       ) : (
//         <>
//           <h3 id={values.id}> {values.details}</h3>
//           <button onClick={deleteCard}>Delete</button>
//           <button onClick={handleUpdateClick}>Update</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Card;
