import React from "react";
import { useState } from "react";
import Task from "./Task";
// const tasks = [
//   {
//     id: 1,
//     text: "Wake Up",
//     day: "18th Jan",
//     reminder: false,
//   },
//   {
//     id: 1,
//     text: "Prayer",
//     day: "18th Jan",
//     reminder: false,
//   },
//   {
//     id: 1,
//     text: "Cooking",
//     day: "18th Jan",
//     reminder: true,
//   },
// ];

const Tasks = ({ tasks, onDelete, onToggle }) => {
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: "Wake Up",
  //     day: "18th Jan",
  //     reminder: false,
  //   },
  //   {
  //     id: 1,
  //     text: "Prayer",
  //     day: "18th Jan",
  //     reminder: false,
  //   },
  //   {
  //     id: 1,
  //     text: "Cooking",
  //     day: "18th Jan",
  //     reminder: true,
  //   },
  // ]);
  return (
    <>
      {tasks.map((task) => (
        // <h3 key={task.id}>{task.text}</h3>
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        ></Task>
      ))}
    </>
  );
};

export default Tasks;
