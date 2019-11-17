import React, { Component } from "react";
import Task from "./Task";
import "./App.css";

class AddTask extends Component<{ onAdd: (task: Task) => void }, Task> {
  render() {
    return (
      <>
        <button
          onClick={() =>
            this.props.onAdd({
              body: "",
              title: ""
            })
          }
        >
          Add new task
        </button>
      </>
    );
  }
}

export default AddTask;
