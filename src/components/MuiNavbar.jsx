import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Stack,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
function MuiNavbar() {
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
                    <Button color="inherit" variant="text">
                        Login
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default MuiNavbar;
