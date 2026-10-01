import { useEffect, useState } from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import "./App.css"
import { v4 } from "uuid"
import { json } from "react-router-dom"
import Title from "./components/Title"

function App() {
  
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  )
    
    /* [{
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false,

    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar programação para se tornar fluente.",
      isCompleted: false,

    },
    {
      id: 3,
      title: "Estudar matemática",
      description: "Estudar matemática para se tornar um desenvolvedor full stack.",
      isCompleted: false,

    },
  ]) */

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5",{method: "GET"})

      const data = await response.json()
      //setTasks(data)

    }

    fetchTasks()
  }, [])

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }
      return task
    })
    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => {
      if (task.id != taskId) {
        return {...task}
      }
    })
    setTasks(newTasks)
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask])
  } 

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask tasks={tasks} onAddTaskSubmit={onAddTaskSubmit}></AddTask>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}></Tasks>
      </div>
      
    </div>
  )
}

export default App