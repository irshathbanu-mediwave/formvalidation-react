import React, { useState } from "react";

const Card = ({ values, deleteCard, UpdateCard }) => {
  const [isEdit, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(values.details);

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    UpdateCard(updatedTitle);
    setIsEditing(false);
  };

  return (
    <div className="card">
      {isEdit ? (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.details)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <h3 id={values.id}> {values.title}</h3>
          <button onClick={deleteCard}>Delete</button>
          <button onClick={handleUpdateClick}>Update</button>
        </>
      )}
    </div>
  );
};

export default Card;
