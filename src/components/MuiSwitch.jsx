import { FormControlLabel, Switch } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function MuiSwitch() {
    const [theme, setTheme] = useState(false);
    console.log(theme);
    const handleChange = (event) => {
        setTheme(event.target.checked);
    };

    return (
        <Box direction="row">
            <FormControlLabel
                label="Dark Mode"
                control={
                    <Switch
                        checked={theme}
                        onChange={handleChange}
                        color="success"
                        size="small"
                    />
                }
            />
        </Box>
    );
}

export default MuiSwitch;
