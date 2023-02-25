import { Link, Stack } from "@mui/material";
import React from "react";

function MuiLink() {
    return (
        <Stack direction="row" m={5} spacing={2}>
            <Link href="https://google.com">Home</Link>
            <Link href="https://google.com" underline="hover">
                Home
            </Link>
            <Link href="https://google.com" underline="none" color="secondary">
                Home
            </Link>
            <Link
                href="https://google.com"
                underline="hover"
                color="secondary"
                variant="h6"
            >
                Home
            </Link>
            <Link
                href="https://google.com"
                underline="hover"
                color="secondary"
                variant="body2"
            >
                Home
            </Link>
        </Stack>
    );
}

export default MuiLink;
