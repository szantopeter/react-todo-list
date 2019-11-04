import React from "react";
import "./App.css";
import AddTask from "./AddTask";
import Task from "./Task";
import TaskList from "./TaskList";

interface State {
  tasks: Task[];
}

class App extends React.Component<{}, State> {
  state = {
    tasks: [{ owner: "o", task: "t" }]
  };

  private onDelete = (index: number) => {
    this.setState({
      tasks: this.state.tasks.filter((task, index2) => index !== index2)
    });
  };

  private onAdd = (task: Task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  render() {
    return (
      <div>
        <AddTask onAdd={this.onAdd} />
        <TaskList tasks={this.state.tasks} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
