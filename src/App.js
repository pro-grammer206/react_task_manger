import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState}  from 'react'

function App() {
  const [showAddTask,setShowAddTask] = useState(false)
 
  const [tasks,setTasks] = useState([{
    id:1,
    desc:"Exercise",
    freq:'Regular',
    reminder:false
  },{
    id:2,
    desc:"Learn",
    freq:'Regular',
    reminder:false

  },{
    id:3,
    desc:"Repeat",
    freq:'Regular',
    reminder:false
  }]) 

  const addTask = (task) =>{
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }
  const deleteTask = (id)=>{
    setTasks(tasks.filter(task=>task.id!==id))
  }
  const toggleReminder = (id)=>{
    setTasks(tasks.map(task=>task.id===id?{...task,reminder:!task.reminder}:task))
  }
  const toggleForm = ()=>{
    setShowAddTask(!showAddTask)
  }
 
  return (
    <div className="App">
      <Header text='Task Manager' btnText={showAddTask?'Hide':'Add'} toggleForm={toggleForm} />
      {showAddTask && <AddTask  onAdd={addTask}/>}
      <Tasks tasks={tasks} deleteTask={deleteTask} onToggle={toggleReminder} />

    </div>
  );
}

export default App;
