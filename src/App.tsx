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

  constructor(props: {}) {
    super(props);
    const storageTasks = localStorage.getItem(App.TASKS);
    if (storageTasks) {
      this.state = JSON.parse(storageTasks) as State;
    } else {
      this.state = {
        tasks: new Array<Task>()
      };
    }
  }

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

  private persistState(newState: { tasks: Task[] }) {
    this.setState(newState);
    window.localStorage.setItem(App.TASKS, JSON.stringify(newState));
  }

  onChange = (task: Task, index: number) => {
    const newState = { tasks: [...this.state.tasks] };
    newState.tasks[index] = task;
    this.persistState(newState);
  };

  render() {
    return (
      <div>
        <AddTask onAdd={this.onAdd} />
        <TaskList
          tasks={this.state.tasks}
          onDelete={this.onDelete}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;
