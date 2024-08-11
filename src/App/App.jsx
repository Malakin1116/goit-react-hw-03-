import { useState } from 'react'

import css from "./App.module.css"
import initialTasks from "../tasks.json"

import Filter from '../Filter/Filter'
import Form from "../Form/Form"
import TaskList from "../TaskList/TaskList"



export default function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const [filter, setFilter] = useState(''); 
  

    const addTask = (newTask) => {
      setTasks((prevTasks)=>{
        return[...prevTasks, newTask];
      });
    } ;

      const deleteTask = (taskId) => {
        setTasks(prevTasks => {
          return prevTasks.filter(task => task.id !== taskId);
        })
      }

      const visibletasks = tasks.filter((e) => 
        e.text.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <div className={css.container}> 
        <p>{filter}</p>
        <Form onAdd={addTask}/>
        <Filter value={filter} onFilter={setFilter}/>
        <TaskList
          tasks={visibletasks}  
          onDelete={deleteTask}
        />
    </div>
  );
}

