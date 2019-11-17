import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddTask from "./AddTask";
import Task from "./Task";
test("callback handler is called", () => {
  const onAdd = jest.fn();

  const { getByLabelText, getByText } = render(<AddTask onAdd={onAdd} />);

  fireEvent.click(getByText(/add new task/i));

  expect(onAdd).toHaveBeenCalled();
});
