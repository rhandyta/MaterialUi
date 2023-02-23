import {
    Box,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
function MuiCheckbox() {
    const [acceptTnC, setAcceptTnC] = useState(false);
    const [skills, setSkills] = useState([]);
    console.log(skills);

    const handleSkillsChange = (event) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter((skill) => skill != event.target.value));
        }
    };

    const handleChange = (event) => {
        setAcceptTnC(event.target.checked);
    };
    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="I Accept Term and Condition"
                    control={
                        <Checkbox checked={acceptTnC} onChange={handleChange} />
                    }
                />
            </Box>

            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                />
            </Box>

            <Box>
                <FormControl>
                    <FormLabel aria-label="skills">Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="html"
                                    onChange={handleSkillsChange}
                                    checked={skills.includes("html")}
                                />
                            }
                            label="HTML"
                        />
                        <FormControlLabel
                            label="CSS"
                            control={
                                <Checkbox
                                    value="css"
                                    onChange={handleSkillsChange}
                                    checked={skills.includes("css")}
                                />
                            }
                        />
                        <FormControlLabel
                            label="JAVASCRIPT"
                            control={
                                <Checkbox
                                    value="javascript"
                                    onChange={handleSkillsChange}
                                    checked={skills.includes("javascript")}
                                />
                            }
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    );
}

export default MuiCheckbox;
