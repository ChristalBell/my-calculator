import { Switch } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <h1>calc</h1>

      <div>
        <h2>theme</h2>
        <Switch {...0} defaultChecked />
      </div>
    </div>
  );
};

export default Header;
