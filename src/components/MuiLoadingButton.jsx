import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/system";
import React from "react";

function MuiLoadingButton() {
    return (
        <Stack spacing={2}>
            <LoadingButton variant="outlined">Fetch Data</LoadingButton>
            <LoadingButton variant="outlined" loading>
                Fetch Data
            </LoadingButton>
            <LoadingButton variant="contained">Submit</LoadingButton>
            <LoadingButton
                variant="contained"
                loading
                loadingIndicator="Loading..."
            >
                Submit
            </LoadingButton>
            <LoadingButton
                variant="text"
                startIcon={<Save />}
                loadingPosition="start"
                sx={{ width: 100 }}
            >
                Save
            </LoadingButton>
            <LoadingButton
                sx={{ width: 100 }}
                variant="text"
                startIcon={<Save />}
                loading
                loadingPosition="start"
            >
                Save
            </LoadingButton>
        </Stack>
    );
}

export default MuiLoadingButton;
