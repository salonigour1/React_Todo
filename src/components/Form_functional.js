import React, { useEffect, useState } from "react";

function Form_functional() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem("localItems")) || [];
    setItems(oldData);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input === "") {
      alert("please enter something");
      return;
    }
    const todo = [
      ...items,
      { name: input, complete: false, id: new Date().getTime() },
    ];
    setItems(todo);
    setInput("");
    localStorage.setItem("localItems", JSON.stringify(todo));
  };

  const completeItem = (id) => {
    const newArr = [...items];
    newArr.map((item) => {
      if (item.id === id) {
        item.complete ? (item.complete = false) : (item.complete = true);
      }
    });
    localStorage.setItem("localItems", JSON.stringify(newArr));
    setItems(newArr);
  };

  const deleteItem = (id) => {
    const newArr = [...items];
    const arr = newArr.filter((item) => {
      if (item.id != id) {
        return item;
      }
    });
    localStorage.setItem("localItems", JSON.stringify(arr));
    setItems(arr);
  };

  const deleteAll = () => {
    localStorage.removeItem("localItems");
    setItems([]);
  };
  return (
    <div className="App">
      <div className="container">
        <form className="add" onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="add_text"
            placeholder="Enter.."
          />
          <button className="customBtn">Add</button>
        </form>
        {items.map((item) => {
          return (
            <li
              key={item.id}
              className={`list ${item.complete ? "check" : ""}`}
            >
              <p className="list_text">{item.name}</p>
              <div className="btns">
                <button
                  className="done_list"
                  onClick={() => completeItem(item.id)}
                >
                  <ion-icon name="checkmark-outline"></ion-icon>
                </button>
                <button
                  className="list_cross"
                  onClick={() => deleteItem(item.id)}
                >
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>
            </li>
          );
        })}
        <br />
        <button className="customBtn" onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
}

export default Form_functional;
