import { Face, Person } from "@mui/icons-material";
import { Chip, Stack } from "@mui/material";
import React, { useState } from "react";

function MuiChip() {
    const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

    const handleDelete = (chipDelete) => {
        setChips((chips) => chips.filter((chip) => chip !== chipDelete));
    };
    return (
        <Stack direction="row" spacing={1}>
            <Chip label="Chip" color="error" size="small" />
            <Chip
                label="Person"
                color="error"
                size="medium"
                icon={<Person />}
            />
            <Chip
                label="Click"
                color="success"
                onClick={() => alert("Clicked")}
            />
            <Chip
                label="Delete"
                color="error"
                icon={<Face />}
                onClick={() => alert("Clicked")}
                onDelete={() => alert("Deleted")}
            />

            {chips.map((chip) => (
                <Chip
                    key={chip}
                    label={chip}
                    color="info"
                    onDelete={() => handleDelete(chip)}
                />
            ))}
        </Stack>
    );
}

export default MuiChip;
