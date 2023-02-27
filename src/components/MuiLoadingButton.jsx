import { Favorite } from "@mui/icons-material";
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
                startIcon={<Favorite />}
                loadingPosition="start"
                sx={{ width: 100 }}
            >
                Submit
            </LoadingButton>
            <LoadingButton
                sx={{ width: 100 }}
                variant="text"
                startIcon={<Favorite />}
                loading
                loadingPosition="start"
            >
                Submit
            </LoadingButton>
        </Stack>
    );
}

export default MuiLoadingButton;
