import React, { useState } from "react";
import SearchTask from "./SearchTask";
import Task from "./Task";

export default function Tasks({ taskList, handelDelete, handelChecked }) {
  const [search, setSearch] = useState("");

  const result = taskList.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchTask search={search} setSearch={setSearch} />
      {result.length ? (
        <div>
          {result.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              handelDelete={handelDelete}
              checked={task.checked}
              handelChecked={handelChecked}
            />
          ))}
        </div>
      ) : (
        <p>Task List is empty</p>
      )}
    </>
  );
}
