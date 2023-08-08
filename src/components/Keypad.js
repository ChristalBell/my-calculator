import { Button } from "@mui/material";
import React, { useReducer } from "react";

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand || ""}${payload.digit}`,
      };
  }
}
function Keypad() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } });
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand}
          {operation}{" "}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>

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
  );
}

export default Keypad;
