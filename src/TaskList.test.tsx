import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaskList from "./TaskList";

test("click adds a new task", () => {
  const tasks = [
    { body: "task1", title: "owner1" },
    { body: "task2", title: "owner2" }
  ];
  const onDelete = jest.fn();
  const onchange = jest.fn();

  const { getByText } = render(
    <TaskList tasks={tasks} onDelete={onDelete} onChange={onchange} />
  );

  tasks.forEach(item => {
    expect(getByText(item.title)).not.toBeEmpty();
    expect(getByText(item.body)).not.toBeEmpty();
  });
});
