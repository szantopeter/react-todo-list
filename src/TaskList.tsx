import React, { FunctionComponent } from "react";
import Task from "./Task";
import "./App.css";

export const TaskList: FunctionComponent<{
  tasks: Task[];
  onDelete: (index: number) => void;
}> = ({ tasks, onDelete }) => (
  <ul>
    {tasks.map((task: Task, index: number) => (
      <li key={index}>
        {task.owner}:{task.task}
        <button onClick={() => onDelete(index)}>X</button>
      </li>
    ))}
  </ul>
);

export default TaskList;
