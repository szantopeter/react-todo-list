import React from "react";
import "./App.css";
import AddTask from "./AddTask";
import Task from "./Task";
import TaskList from "./TaskList";

interface State {
  tasks: Task[];
}

class App extends React.Component<{}, State> {
  private static readonly TASKS = "tasks";

  componentDidMount() {
    const storageTasks = localStorage.getItem(App.TASKS);
    if (storageTasks) {
      this.setState(JSON.parse(storageTasks) as State);
    }
  }

  state = {
    tasks: new Array<Task>()
  };

  private onDelete = (index: number) => {
    const newState = {
      tasks: this.state.tasks.filter((task, index2) => index !== index2)
    };
    this.persistState(newState);
  };

  private onAdd = (task: Task) => {
    const newState = { tasks: [...this.state.tasks, task] };
    this.persistState(newState);
  };

  private persistState(newState: { tasks: Task[]; }) {
    this.setState(newState);
    window.localStorage.setItem(App.TASKS, JSON.stringify(newState));
  }

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
