import { Button } from "@mui/material";
import { ACTIONS } from "./Keypad";

export default function OperationButton({ dispatch, operation }) {
  return (
    <Button
      variant="contained"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </Button>
  );
}
