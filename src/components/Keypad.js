import { Button } from "@mui/material";
import React, { useState } from "react";

function Keypad() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <div> {count}</div>
      <div>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>DEL</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button onClick={incrementCount}>+</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button onClick={decrementCount}>-</Button>
        <Button>.</Button>
        <Button>0</Button>
        <Button>/</Button>
        <Button>X</Button>
        <Button>RESET</Button>
        <Button>=</Button>
      </div>
    </div>
  );
}

export default Keypad;
