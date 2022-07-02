import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "../components/todoList.css";

function TodoList() {
  //tasks
  const [toDo, setToDO] = useState([
    { id: 1, title: "Task1", status: false },
    { id: 2, title: "Task2", status: false },
  ]);

  //temp state
  const [newTask, setNewTask] = useState("");
  const [updateTask, setUpdateTask] = useState("");

  //add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDO([...toDo, newEntry]);
      setNewTask("");
    }
  };

  //delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDO(newTasks);
  };

  //completed task
  const completedTask = (id) => {
    let doneTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDO(doneTask);
  };

  //cancel update
  const cancelUpdate = () => {
    setUpdateTask("");
  };

  //change task
  const changeTask = (e) => {
    let newEntry = {
      id: updateTask.id,
      title: e.target.value,
      status: updateTask.status ? true : false,
    };
    setUpdateTask(newEntry);
  };

  //update task
  const updateTaskFn = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateTask.id);
    let updatedTask = [...filterRecords, updateTask];
    setToDO(updatedTask);
    setUpdateTask("");
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <br />
      {updateTask && updateTask ? (
        <>
          {/* Update Task */}
          <div className="row">
            <div className="col">
              <input
                className="form-control form-control-lg"
                value={updateTask && updateTask.title}
                onChange={(e) => changeTask(e)}
              />
            </div>
            <div className="col-auto">
              <button
                className="btn btn-lg btn-success mr-20"
                onClick={updateTaskFn}
              >
                Update
              </button>
            </div>
            <div className="col-auto">
              <button className="btn btn-lg btn-warning" onClick={cancelUpdate}>
                Cancel
              </button>
            </div>
          </div>
          <br />
        </>
      ) : (
        <>
          {/* Add Task */}
          <div className="row">
            <div className="col">
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="form-control form-control-lg"
              ></input>
            </div>
            <div className="col-auto">
              <button onClick={addTask} className="btn btn-lg btn-success">
                Add Task
              </button>
            </div>
          </div>
          <br />
        </>
      )}

      {toDo && toDo.length ? "" : "No Tasks ...."}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="icons-wrap">
                    <span
                      title="completed"
                      onClick={(e) => completedTask(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>

                    {task.status ? null : (
                      <span
                        title="edit"
                        onClick={() =>
                          setUpdateTask({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}
                    <span title="delete" onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
}

export default TodoList;
