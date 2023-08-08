import { Button } from "@mui/material";
import React, { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default function Keypad() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function decrement() {
    dispatch({ type: "decrement" });
  }
  function increment() {
    dispatch({ type: "increment" });
  }
  return (
    <div>
      <div> {state.count}</div>
      <div>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>DEL</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button onClick={increment}>+</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button onClick={decrement}>-</Button>
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

// export default Keypad;
