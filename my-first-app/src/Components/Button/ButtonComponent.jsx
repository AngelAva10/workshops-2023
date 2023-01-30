import React from 'react'

export const ButtonComponent = ( { name, onClick } ) => {
  return (
    <button onClick={ onClick } >{ name }</button>
  )
}
