import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddTask from "./AddTask";
import Task from "./Task";

test("click adds a new task", () => {
  const onAdd = (task: Task) => {
    expect(task).toEqual({ task: "task", owner: "owner" });
  };

  const { getByLabelText, getByText } = render(<AddTask onAdd={onAdd} />);

  fireEvent.change(getByLabelText(/task/i), { target: { value: "task" } });
  fireEvent.change(getByLabelText(/owner/i), { target: { value: "owner" } });
  fireEvent.click(getByText(/add new task/i));
});

test("callback handler is called", () => {
  const onAdd = jest.fn();

  const { getByLabelText, getByText } = render(<AddTask onAdd={onAdd} />);

  fireEvent.change(getByLabelText(/task/i), { target: { value: "task" } });
  fireEvent.change(getByLabelText(/owner/i), { target: { value: "owner" } });
  fireEvent.click(getByText(/add new task/i));

  expect(onAdd).toHaveBeenCalled();
});
