import { Button, ToggleButton, Switch } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#3c4564" }}>
      <h1 style={{ color: "#fefefc" }}>calc</h1>

      <div>
        <h2>theme</h2>
        <Switch {...0} defaultChecked />
      </div>
    </div>
  );
};

export default Header;
