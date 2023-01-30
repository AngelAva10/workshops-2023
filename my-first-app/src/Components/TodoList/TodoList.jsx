import React, { useState } from 'react'
import { ButtonComponent } from './ButtonComponent'
import { InputComponent } from './InputComponent'
import { TaskComponent } from './TaskComponent';

export const TodoList = ( { text } ) => {

    const [tasks, setTasks] = useState([]);

    const [task, setTask] = useState('');

    const handleOnChange = (e) => {
        console.log( e.target.value );
        setTask( e.target.value )
    }

    const createTask = (task) => {
        const newTask = {
            id: Date.now(),
            task
        }
        setTasks( [newTask, ...tasks] )
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter( task => task.id !== id ))
    }

  return (
    <>
        <InputComponent onChange = { handleOnChange } />
        <ButtonComponent onClick={ () => createTask( task ) } name="add" />
        <ul>
            { tasks.map( ({id, task}) => <TaskComponent 
                                            key={ id } 
                                            text={ task } 
                                            handleOnDelete = { () => deleteTask( id ) } /> ) }
        </ul>
    </>
    
  )
}
