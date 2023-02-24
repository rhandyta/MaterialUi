import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const skills = ["html", "css", "js", "react", "nextjs"];

const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
}));

function MuiAutocomplete() {
    const [value, setValue] = useState(null);
    const [skill, setSkill] = useState(null);
    console.log(value);
    console.log({ skill });
    return (
        <Stack spacing={5} direction="row" justifyContent="center">
            <Box width="250px">
                <Autocomplete
                    fullWidth
                    disablePortal
                    freeSolo
                    options={skills}
                    onChange={(event, newValue) => setValue(newValue)}
                    renderInput={(params) => (
                        <TextField {...params} label="Skills" />
                    )}
                />
            </Box>
            <Box width="250px">
                <Autocomplete
                    fullWidth
                    disablePortal
                    freeSolo
                    options={skillOptions}
                    value={skill}
                    onChange={(event, newSkill) => setSkill(newSkill)}
                    renderInput={(params) => (
                        <TextField {...params} label="Skills" />
                    )}
                />
            </Box>
        </Stack>
    );
}

export default MuiAutocomplete;
