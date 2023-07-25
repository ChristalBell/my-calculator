import React from "react";
import { Button } from "@mui/material";
function Keypad() {
  return (
    <div>
      <div>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>DEL</Button>
      </div>
      <div>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>+</Button>
      </div>
      <div>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>-</Button>
      </div>
      <div>
        <Button>.</Button>
        <Button>0</Button>
        <Button>/</Button>
      </div>
      <div>
        <Button>RESET</Button>
        <Button>=</Button>
      </div>
    </div>
  );
}

export default Keypad;
