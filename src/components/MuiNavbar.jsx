import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Stack,
    Menu,
    MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { KeyboardArrowDown } from "@mui/icons-material";
function MuiNavbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="logo"
                >
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    POKEMON
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit" variant="text">
                        Features
                    </Button>
                    <Button color="inherit" variant="text">
                        Pricing
                    </Button>
                    <Button color="inherit" variant="text">
                        About
                    </Button>
                    <Button
                        color="inherit"
                        variant="text"
                        id="resources-button"
                        aria-controls={open ? "resources-button" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDown />}
                    >
                        Resources
                    </Button>
                    <Button color="inherit" variant="text">
                        Login
                    </Button>
                </Stack>
                <Menu
                    id="resources-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    MenuListProps={{
                        "aria-labelledby": "resources-button",
                    }}
                >
                    <MenuItem onClick={handleClose}>Blogs</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default MuiNavbar;
