import React from 'react'
import '../App.css'
import {HiOutlineX} from 'react-icons/hi'

const Task = ({task,deleteTask,onToggle}) => {
    return (
        <div className={`card ${task.reminder ? 'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
            <p className='title'>{task.desc} <HiOutlineX  onClick={()=>deleteTask(task.id)} style={{marginTop:'10px'}}className='icons'/></p>
            <p className='small'>{task.freq}</p>
        </div>
    )
}

export default Task
