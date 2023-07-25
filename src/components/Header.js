import { Button, ToggleButtonGroup } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#3c4564" }}>
      <h1 style={{ color: "#fefefc" }}>calc</h1>
      <ToggleButtonGroup size="sm" variant="soft">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ToggleButtonGroup>
      <div>
        <form>
          <input type="text" />
        </form>
      </div>
    </div>
  );
};

export default Header;
