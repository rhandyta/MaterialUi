import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

function MuiRadio() {
    const [experience, setExperience] = useState("");
    console.log(experience);
    const handleChange = (event) => {
        setExperience(event.target.value);
    };
    return (
        <FormControl error>
            <FormLabel htmlFor="experience">your experience</FormLabel>
            <RadioGroup
                aria-labelledby="experience"
                name="experience"
                value={experience}
                onChange={handleChange}
            >
                <FormControlLabel
                    control={<Radio />}
                    value="0-2"
                    label="0 - 2 Years"
                />
                <FormControlLabel
                    control={<Radio />}
                    value="2-5"
                    label="2 - 5 Years"
                />
                <FormControlLabel
                    control={<Radio />}
                    value="5-10"
                    label="5 - 10 Years"
                />
            </RadioGroup>
            <FormHelperText>invalid your selection</FormHelperText>
        </FormControl>
    );
}

export default MuiRadio;
