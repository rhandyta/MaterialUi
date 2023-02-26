import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";

function MuiBottomNavigation() {
    const [value, setValue] = useState(0);
    return (
        <BottomNavigation
            sx={{ width: "100%", position: "absolute", bottom: "0" }}
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
        >
            <BottomNavigationAction icon={<Home />} label="Home" showLabel />
            <BottomNavigationAction
                icon={<Favorite />}
                label="Favorite"
                showLabel
            />
            <BottomNavigationAction
                icon={<Person />}
                label="Person"
                showLabel
            />
        </BottomNavigation>
    );
}

export default MuiBottomNavigation;
