import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

function MuiAvatar() {
    return (
        <Stack spacing={5}>
            <Stack direction="row" spacing={1}>
                <Avatar sx={{ bgcolor: "primary.light" }}>CW</Avatar>
                <Avatar sx={{ bgcolor: "success.light" }}>CA</Avatar>
            </Stack>
            <Stack direction="row" spacing={1}>
                <AvatarGroup max={3}>
                    <Avatar sx={{ bgcolor: "primary.light" }}>CW</Avatar>
                    <Avatar sx={{ bgcolor: "success.light" }}>CA</Avatar>
                    <Avatar
                        src="https://randomuser.me/api/portraits/thumb/women/99.jpg"
                        alt="Jeni"
                    />
                    <Avatar
                        src="https://randomuser.me/api/portraits/thumb/men/1.jpg"
                        alt="Adul"
                    />
                </AvatarGroup>
            </Stack>
            <Stack direction="row" spacing={1}>
                <Avatar
                    sx={{ bgcolor: "primary.light", height: 48, width: 48 }}
                    variant="square"
                >
                    CW
                </Avatar>
                <Avatar
                    sx={{ bgcolor: "success.light", height: 48, width: 48 }}
                    variant="square"
                >
                    CA
                </Avatar>
            </Stack>
        </Stack>
    );
}

export default MuiAvatar;
