import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

function MuiDrawer() {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
                onClick={() => setIsOpenDrawer(true)}
            >
                <Menu />
            </IconButton>
            <Drawer
                anchor="left"
                open={isOpenDrawer}
                onClose={() => setIsOpenDrawer(false)}
            >
                <Box p={2} width="200px" textAlign="center" role="presentation">
                    <Typography variant="h6" component="div">
                        Header
                    </Typography>
                </Box>
            </Drawer>
        </>
    );
}

export default MuiDrawer;
