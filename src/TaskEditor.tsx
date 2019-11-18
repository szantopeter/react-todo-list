import React, { FunctionComponent } from "react";
import Task from "./Task";
import "./App.css";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

export const TaskEditor: FunctionComponent<{
  task: Task;
  onDelete: () => void;
  onChange: (task: Task) => void;
}> = ({ task, onDelete, onChange }) => {
  const onStopDrag = (e: DraggableEvent, data: DraggableData) => {
    onChange({ ...task, x: data.lastX, y: data.lastY });
  };

  return (
    <Draggable
      handle=".dragHandle"
      onStop={onStopDrag}
      position={{ x: task.x || 0, y: task.y || 0 }}
    >
      <div>
        <div className="task">
          <div className="dragHandle">
            <p>Drag me</p>
            <button className="deleteButton" onClick={() => onDelete()}>
              X
            </button>
          </div>
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
    </Draggable>
  );
};

export default TaskEditor;
