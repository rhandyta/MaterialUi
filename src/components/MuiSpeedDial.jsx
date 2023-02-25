import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
function MuiSpeedDial() {
    return (
        <>
            <SpeedDial
                sx={{
                    position: "absolute",
                    bottom: "16px",
                    right: "16px",
                }}
                ariaLabel="tooltip"
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            >
                <SpeedDialAction
                    icon={<CopyIcon />}
                    tooltipTitle="Copy"
                    tooltipOpen
                />
                <SpeedDialAction
                    icon={<PrintIcon />}
                    tooltipTitle="Print"
                    tooltipOpen
                />
                <SpeedDialAction
                    icon={<ShareIcon />}
                    tooltipTitle="Share"
                    tooltipOpen
                />
            </SpeedDial>
        </>
    );
}

export default MuiSpeedDial;
