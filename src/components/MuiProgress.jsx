import { CircularProgress, LinearProgress } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function MuiProgress() {
    return (
        <Stack direction="column" spacing={2}>
            <CircularProgress />
            <CircularProgress color="success" />
            <CircularProgress variant="determinate" color="error" value={50} />
            <LinearProgress />
            <LinearProgress color="success" />
            <LinearProgress variant="determinate" color="error" value={50} />
        </Stack>
    );
}

export default MuiProgress;
