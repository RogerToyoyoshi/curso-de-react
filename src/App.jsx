import { useState } from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import "./App.css"

function App() {
  
  const [tasks, setTeasks] = useState([{
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
])

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask></AddTask>
        <Tasks tasks={tasks}></Tasks>
      </div>
      
    </div>
  )
}

export default App