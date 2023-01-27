import React from 'react';
import { setValue, value } from 'react';

export const Input = () => {
    return (
        <>
        <label htmlFor='input'>Ingrese texto</label>
          <input id='input' onChange={(event) => setValue(event.target.value)} value={value} />
          <h2>{text}</h2>
        </>
      )
}