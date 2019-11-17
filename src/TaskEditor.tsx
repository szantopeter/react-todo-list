import React, { FunctionComponent } from "react";
import Task from "./Task";
import "./App.css";

export const TaskEditor: FunctionComponent<{
  task: Task;
  onDelete: () => void;
  onChange: (task: Task) => void;
}> = ({ task, onDelete, onChange }) => {
  return (
    <div>
      <div className="task">
        <div className="taskHeader">
          <input
            className="ownerName"
            value={task.title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChange({
                ...task,
                title: event.target.value
              });
            }}
          />
          <button className="deleteButton" onClick={() => onDelete()}>
            X
          </button>
        </div>

        <textarea
          className="taskEditor"
          value={task.body}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChange({
              ...task,
              body: event.target.value
            });
          }}
        />
      </div>
    </div>
  );
};

export default TaskEditor;
