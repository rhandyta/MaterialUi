import { Check } from "@mui/icons-material";
import { Alert, AlertTitle, Stack } from "@mui/material";
import React from "react";

function MuiAlert() {
    return (
        <Stack spacing={2}>
            <Alert severity="success" icon={<Check fontSize="medium" />}>
                <AlertTitle>Success!</AlertTitle>
                Lorem ipsum dolor sit amet.
            </Alert>

            <Alert severity="success">Lorem ipsum dolor sit amet.</Alert>
            <Alert severity="warning">Lorem ipsum dolor sit amet.</Alert>
            <Alert severity="info">Lorem ipsum dolor sit amet.</Alert>
            <Alert severity="error">Lorem ipsum dolor sit amet.</Alert>

            <Alert severity="success" variant="outlined">
                Lorem ipsum dolor sit amet.
            </Alert>
            <Alert severity="warning" variant="outlined">
                Lorem ipsum dolor sit amet.
            </Alert>
            <Alert severity="info" variant="outlined">
                Lorem ipsum dolor sit amet.
            </Alert>
            <Alert severity="error" variant="outlined">
                Lorem ipsum dolor sit amet.
            </Alert>

            <Alert severity="success" variant="filled">
                Lorem ipsum dolor sit amet.
            </Alert>
            <Alert severity="warning" variant="filled">
                Lorem ipsum dolor sit amet.
            </Alert>
            <Alert severity="info" variant="filled">
                Lorem ipsum dolor sit amet.
            </Alert>
            <Alert severity="error" variant="filled">
                Lorem ipsum dolor sit amet.
            </Alert>
        </Stack>
    );
}

export default MuiAlert;
