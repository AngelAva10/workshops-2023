import React, { useState }  from "react";
import { Button } from "./Button.jsx";
import { TextDisplay } from "./TextDisplay.jsx";

export const Counter = () => {

    const [state, setState] = useState(0);
  
    const handleIncrement = () => setState(prev => prev + 1);
    const handleDecrement = () => setState(prev => prev - 1);
  
    return (
      <>
        <Button onClick={handleIncrement} text={'increment'} />

        <TextDisplay text={state} />
        
        <Button onClick={handleDecrement} text={'decrement'} />
      </>
    )
  }