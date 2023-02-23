import { Box, MenuItem, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function MuiSelect() {
    const [countries, setCountries] = useState([]);
    console.log(countries);
    const handleChange = (event) => {
        setCountries(event.target.value);
    };
    return (
        <Stack spacing={5} direction="column">
            <Stack direction="row" spacing={2} justifyContent="center">
                <Box width="200px">
                    <TextField
                        variant="standard"
                        color="primary"
                        label="Select country"
                        select
                        fullWidth
                        onChange={handleChange}
                        value={countries}
                        SelectProps={{
                            multiple: true,
                        }}
                        helperText="please select your country"
                        error
                    >
                        <MenuItem value="ID">Indonesia</MenuItem>
                        <MenuItem value="US">United Stated</MenuItem>
                        <MenuItem value="EU">Europe</MenuItem>
                    </TextField>
                </Box>
            </Stack>
        </Stack>
    );
}

export default MuiSelect;
