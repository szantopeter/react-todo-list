import React, { FunctionComponent } from "react";
import Task from "./Task";
import "./App.css";

export const TaskList: FunctionComponent<{
  tasks: Task[];
  onDelete: (index: number) => void;
}> = ({ tasks, onDelete }) => (
  <div>
    {tasks.map((task: Task, index: number) => (
      <p key={index}>
        @{task.owner}
        <br />
        {task.task}
        <button onClick={() => onDelete(index)}>X</button>
      </p>
    ))}
  </div>
);

export default TaskList;
