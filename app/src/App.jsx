import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import Button from "./Components/Button";
import Input from "./Components/Input";
function App() {
  const [item, setItem] = useState([]);
  const [detail, setdetail] = useState("");
  const handleChange = (e) => {
    setdetail(e.target.value);
    console.log(setdetail);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const element = {
      id: new Date().getTime(),
      detail: detail,
    };
    const newdata = [...item, element];
    setItem(newdata);
    console.log(newdata);
    console.log("Item:", item);
    localStorage.setItem("item-list", JSON.stringify(newdata));
    setdetail("");
  };
  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("item-list"));
    if (store) {
      setItem(store);
    }
  }, []);
  function deleteCard(id) {
    const filterArray = item.filter((itemadd) => itemadd.id !== id);
    setItem(filterArray);
    localStorage.setItem("item-list", JSON.stringify(filterArray));
  }

  function UpdateCard(id, updatedTitle) {
    const updatedTitles = item.map((addelement) => {
      if (addelement.id === id) {
        return { ...addelement, detail: updatedTitle };
      }
      return addelement;
    });

    setItem(updatedTitles);
    localStorage.setItem("item-list", JSON.stringify(updatedTitles));
    return updatedTitle;
  }
  return (
    <div id="form-container">
      <form onSubmit={handleSubmit}>
        <label>What is you like add it</label>
        <Input
          type="text"
          placeholder="Enter the value"
          name="detail"
          onChange={handleChange}
          value={detail}
        />
        <Button type="submit" label="Add" />
      </form>

      {item.map((add) => {
        return (
          <div key={add.id}>
            <Card values={add} />
            deleteCard={() => deleteCard(add.id)}
            UpdateCard={(updatedTitle) => UpdateCard(add.id, updatedTitle)}
          </div>
        );
      })}
    </div>
  );
}
{
  /* {item.map((add) => {
        return <div key={add.id}></div>;
      })}
    </div>
  );
} */
}
export default App;
