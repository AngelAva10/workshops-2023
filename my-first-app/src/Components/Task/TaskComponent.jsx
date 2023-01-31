import React from 'react'
import { ButtonComponent } from '../Button/ButtonComponent'

export const TaskComponent = ( { text, handleOnDelete } ) => {
  return (
    
    <li>{ text }<ButtonComponent name="delete" onClick={ handleOnDelete } /></li>
  )
}
