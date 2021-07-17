import React from 'react'
import Task from './Task'
import '../App.css'

const Tasks = ({tasks,deleteTask,onToggle,addTask}) => {
    return (
        <>  
       {tasks.map(task=><Task key={task.id} task={task} deleteTask={deleteTask} onToggle={onToggle} />)}
        </>
    )
}

export default Tasks
