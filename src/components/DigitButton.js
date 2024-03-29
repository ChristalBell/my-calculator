import { Button } from "@mui/material";
import { ACTIONS } from "./Keypad";

export default function DigitButton({ dispatch, digit }) {
  return (
    <Button
      variant="contained"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </Button>
  );
}
