import React, { Component } from "react";
import "./myStyle.css";

export class Form extends Component {
  constructor() {
    super();

    this.state = {
      input_text: "",
      items: [],
    };
  }
  componentDidMount() {
    const todo = JSON.parse(localStorage.getItem("localItems")) || [];
    this.setState({
      items: todo,
    });
  }

  addBtn = (event) => {
    event.preventDefault();
    let { input_text, items } = this.state;
    if (input_text === "") {
      alert("please enter something");
      return;
    }
    const todo = [
      ...this.state.items,
      {
        name: this.state.input_text,
        complete: false,
        id: new Date().getTime(),
      },
    ];
    this.setState({
      items: todo,
      input_text: "",
    });
    localStorage.setItem("localItems", JSON.stringify(todo));
  };

  changeTextHandler = (event) => {
    this.setState({
      input_text: event.target.value,
    });
  };

  completeItem = (index) => {
    console.log(index);
    const todo = JSON.parse(localStorage.getItem("localItems")) || [];
    todo[index].complete
      ? (todo[index].complete = false)
      : (todo[index].complete = true);
    localStorage.setItem("localItems", JSON.stringify(todo));
    this.setState({
      items: todo,
    });
  };
  deleteItem = (index) => {
    const todo = JSON.parse(localStorage.getItem("localItems")) || [];
    todo.splice(index, 1);
    localStorage.setItem("localItems", JSON.stringify(todo));
    this.setState({
      items: todo,
    });
  };
  deleteAll = () => {
    localStorage.clear();
    this.setState({
      items: [],
    });
  };
  render() {
    const { items, input_text } = this.state;
    return (
      <div className="App">
        <div className="container">
          <form className="add" onSubmit={this.handleSubmit}>
            <input
              value={input_text}
              onChange={this.changeTextHandler}
              className="add_text"
              placeholder="Enter.."
            />
            <button className="customBtn" onClick={this.addBtn}>
              Add
            </button>
          </form>

          {items.map((curr, index) => {
            return (
              <li
                key={curr.id}
                className={`list ${curr.complete ? "check" : ""}`}
              >
                <p className="list_text">{curr.name}</p>
                <div className="btns">
                  <button
                    className="done_list"
                    onClick={() => this.completeItem(index)}
                  >
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </button>
                  <button
                    className="list_cross"
                    onClick={() => this.deleteItem(index)}
                  >
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                </div>
              </li>
            );
          })}
          <br />
          <button className="customBtn" onClick={this.deleteAll}>
            Delete All
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
