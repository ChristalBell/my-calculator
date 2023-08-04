import { Button } from "@mui/material";
import React, { useReducer } from "react";
const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};
function reducer(state, { type, payload }) {}
function Keypad() {
  const [{ currentValue, previousValue, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div>
      <div className="screen">
        {previousValue}
        {operation}
        {currentValue}
      </div>
      <div>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>DEL</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>+</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>-</Button>
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
