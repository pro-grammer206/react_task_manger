import React from 'react'
import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const initialState = {desc:"",freq:"",reminder:false}
    const [uinfo,setUinfo] = useState(initialState)
    const handleChange = (e) =>{
        const target = e.target
        const value = target.type ==='checkbox'? target.checked:target.value;
        const name = target.name
        setUinfo({...uinfo,[name]:value})
    }
    const handleForm = (e)=>{
        e.preventDefault();

        onAdd(uinfo)
        setUinfo(initialState)
        
    }
    return (
        <form className='addForm' onSubmit = {handleForm}>
            <label htmlFor="tn">Task name<input name='desc' value={uinfo.desc} id='tn' type="text" onChange={handleChange}/></label>
            <label htmlFor="fr">Frequency<input name='freq' id='fr' value={uinfo.freq}  type="text" onChange={handleChange} /></label>
            <label htmlFor="rm">Reminder<input name='reminder' id='rm' value={uinfo.freq}  type='checkbox' onChange={handleChange}/></label>
            <input type="submit" value="Save" className='btn'/>
        </form>
    )
}

export default AddTask
