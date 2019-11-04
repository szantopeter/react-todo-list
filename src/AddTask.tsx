import React, { Component } from "react";
import Task from "./Task"
import "./App.css";

class AddTask extends Component<{ onAdd: (task: Task) => void }, Task> {
  state = {
    task: "",
    owner: ""
  };

  render() {
    return (
      <div>
        Task:
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ ...this.state, task: event.target.value });
          }}
        />
        Owner:
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ ...this.state, owner: event.target.value });
          }}
        />
        <button onClick={() => this.props.onAdd(this.state)}>Add new task</button>
      </div>
    );
  }
}

export default AddTask;
