import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { Box, TextField } from "@mui/material";
import React, {useState} from "react";

function MuiDateRangePicker() {
    const [value, setValue] = useState([null, null]);

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    return (
        <Box width={500}>
            <DateRangePicker
                startText="Check-In"
                endText="Check-out"
                value={value}
                onChange={handleChange}
                renderInput={(startProps, endProps) => (
                    <>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}>to</Box>
                        <TextField {...endProps} />
                    </>
                )}
            />
        </Box>
    );
}

export default MuiDateRangePicker;
