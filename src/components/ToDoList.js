import React, { Component } from "react";
import Loading from "./Loading";
import "./myStyle.css";
// import axios from axios;
class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [{ name: "sam", url: "abs" }],
      loader: false,
    };
  }
  componentDidMount() {
    this.setState({ loader: true });
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1500`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          names: data.results,
          loader: false,
        });
      });
  }
  
  render() {
    const { names } = this.state;

    if (this.state.loader) {
      return <Loading />;
    } else {
      return (
        <div>
          {names.map((curr) => {
            return <div>{curr.name}</div>;
          })}
        </div>
      );
    }
  }
}

export default ToDoList;
