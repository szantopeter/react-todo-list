import React, { FunctionComponent } from "react";
import Task from "./Task";
import "./App.css";
import TaskEditor from "./TaskEditor";

export const TaskList: FunctionComponent<{
  tasks: Task[];
  onDelete: (index: number) => void;
  onChange: (task: Task, index: number) => void;
}> = ({ tasks, onDelete, onChange }) => {
  return (
    <div>
      {tasks.map((task: Task, index: number) => {

        return (
          <TaskEditor
            key={index}
            task={task}
            onChange={(task: Task) => {
              onChange(task, index);
            }}
            onDelete={() => {
              onDelete(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
