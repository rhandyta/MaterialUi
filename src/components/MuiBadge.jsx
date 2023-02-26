import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

function MuiBadge() {
    return (
        <Stack spacing={5}>
            <Stack spacing={5} direction="row">
                <Badge badgeContent="3">
                    <Mail color="action" />
                </Badge>
                <Badge badgeContent="0">
                    <Mail color="action" />
                </Badge>
                <Badge badgeContent="0" showZero color="success">
                    <Mail color="action" />
                </Badge>
                <Badge badgeContent="3" color="primary">
                    <Mail color="action" />
                </Badge>{" "}
                <Badge badgeContent="3" color="secondary">
                    <Mail color="action" />
                </Badge>
                <Badge badgeContent="100" color="secondary">
                    <Mail color="action" />
                </Badge>
                <Badge badgeContent={100} color="secondary" max={999}>
                    <Mail color="action" />
                </Badge>
            </Stack>
            <Stack spacing={5} direction="row">
                <Badge badgeContent="100" color="secondary" variant="dot">
                    <Mail color="action" />
                </Badge>
                <Badge
                    badgeContent="100"
                    color="secondary"
                    variant="dot"
                    overlap="circular"
                >
                    <Mail color="action" />
                </Badge>
                <Badge badgeContent={100} color="secondary" max={999}>
                    <Mail color="action" />
                </Badge>
                <Badge
                    badgeContent={100}
                    color="secondary"
                    max={999}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                >
                    <Mail color="action" />
                </Badge>
                <Badge
                    badgeContent={100}
                    color="secondary"
                    max={999}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    invisible={true}
                >
                    <Mail color="action" />
                </Badge>
            </Stack>
        </Stack>
    );
}

export default MuiBadge;
