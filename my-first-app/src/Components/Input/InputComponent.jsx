import React from 'react'

export const InputComponent = ( { onChange }) => {
  return (
    <input type="text" onChange={ onChange } placeholder='add task' />
  )
}
