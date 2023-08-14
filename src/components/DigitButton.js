import { Button, ThemeProvider, createTheme } from "@mui/material";
import { ACTIONS } from "./Keypad";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(0, 0%, 90%)",
    },
    shadows: {
      2: "hsl(0, 0%, 93%)",
    },
  },
});
export default function DigitButton({ dispatch, digit }) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
        }
      >
        {digit}
      </Button>
    </ThemeProvider>
  );
}
