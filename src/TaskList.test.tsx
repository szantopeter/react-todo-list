import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaskList from "./TaskList";

test("click adds a new task", () => {
  const tasks = [
    { task: "task1", owner: "owner1" },
    { task: "task2", owner: "owner2" }
  ];
  const onDelete = jest.fn();

  const { getByText } = render(<TaskList tasks={tasks} onDelete={onDelete} />);

  tasks.forEach(item => {
    expect(getByText("@" + item.owner + item.task)).not.toBeEmpty();
  });
});
