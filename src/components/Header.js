import { Slider } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <h1>calc</h1>
      <div>
        <h2>theme</h2>
        <Slider
          sx={{
            width: 50,
            height: 15,
          }}
          defaultValue={1}
          step={1}
          marks
          min={1}
          max={3}
        />
      </div>
    </div>
  );
};

export default Header;
