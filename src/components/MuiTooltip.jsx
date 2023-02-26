import { Delete } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";

function MuiTooltip() {
    return (
        <Box width={200} height={200} marginX="auto">
            <Tooltip title="Delete" placement="left">
                <IconButton>
                    <Delete />
                </IconButton>
            </Tooltip>
            <Tooltip
                title="Delete"
                placement="right"
                arrow
                leaveDelay={500}
                enterDelay={200}
            >
                <IconButton>
                    <Delete />
                </IconButton>
            </Tooltip>
        </Box>
    );
}

export default MuiTooltip;
