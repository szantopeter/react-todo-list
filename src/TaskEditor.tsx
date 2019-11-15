import React, { FunctionComponent } from "react";
import Task from "./Task";
import "./App.css";
import RichTextEditor, { EditorValue } from "react-rte";

export const TaskEditor: FunctionComponent<{
  task: Task;
  onDelete: () => void;
  onChange: (task: Task) => void;
}> = ({ task, onDelete, onChange }) => {
  const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: [],
    INLINE_STYLE_BUTTONS: [
      { label: "Bold", style: "BOLD", className: "custom-css-class" },
      { label: "Italic", style: "ITALIC" },
      { label: "Underline", style: "UNDERLINE" }
    ],
    BLOCK_TYPE_DROPDOWN: [
      { label: "Normal", style: "unstyled" },
      { label: "Heading Large", style: "header-one" },
      { label: "Heading Medium", style: "header-two" },
      { label: "Heading Small", style: "header-three" }
    ],
    BLOCK_TYPE_BUTTONS: [
      { label: "UL", style: "unordered-list-item" },
      { label: "OL", style: "ordered-list-item" }
    ]
  };

  const FORMAT = "markdown";

  const [editorValue, setEditorValue] = React.useState(
    RichTextEditor.createValueFromString(task.task, FORMAT)
  );

  if (editorValue.toString(FORMAT) !== task.task) {
    setEditorValue(RichTextEditor.createValueFromString(task.task, FORMAT));
  }

  return (
    <div>
      <div className="task">
        <div className="taskHeader">
          <input
            className="ownerName"
            value={task.owner}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChange({
                task: editorValue.toString(FORMAT),
                owner: event.target.value
              });
            }}
          />
          <button className="deleteButton" onClick={() => onDelete()}>
            X
          </button>
        </div>
        <RichTextEditor
          className="taskEditor"
          toolbarConfig={toolbarConfig}
          onChange={(value: EditorValue) => {
            setEditorValue(value);
            onChange({
              task: value.toString(FORMAT),
              owner: task.owner
            });
          }}
          value={editorValue}
        />
      </div>
    </div>
  );
};

export default TaskEditor;
