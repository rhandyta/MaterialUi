import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    ButtonGroup,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Stack,
    TextField,
} from "@mui/material";
import React, { useState } from "react";

function MuiTextField() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <Stack spacing={5} direction="column" justifyContent="center">
            <Stack spacing={2} direction="row">
                <TextField label="Outlined" variant="outlined" />
                <TextField label="Filled" variant="filled" />
                <TextField label="Standard" variant="standard" />
            </Stack>
            <Stack spacing={2} direction="row">
                <TextField label="required" variant="standard" required />
                <TextField label="disabled" variant="standard" disabled />
                <TextField
                    label="readOnly"
                    variant="standard"
                    defaultValue="John Doe"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    label="number"
                    variant="standard"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField label="search" type="search" variant="standard" />
                <TextField
                    label="helperText"
                    helperText="Some important text"
                    variant="standard"
                />
            </Stack>

            <Box component="form" noValidate>
                <Stack spacing={2} direction="row">
                    <TextField variant="standard" label="error" error />
                    <TextField
                        error
                        label="Error"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        error
                        label="Name"
                        defaultValue="Hello World"
                        variant="filled"
                        helperText="Error name"
                    />
                </Stack>
            </Box>
            <Box component="form" noValidate>
                <Stack spacing={2} direction="row">
                    <TextField maxRows={3} label="Description" multiline />
                    <TextField
                        maxRows={3}
                        label="Description"
                        multiline
                        placeholder="description"
                    />
                </Stack>
            </Box>
            <Box component="form">
                <Stack spacing={2} direction="row">
                    <FormControl variant="standard">
                        <InputLabel htmlFor="user">User</InputLabel>
                        <Input
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <TextField
                        label="user"
                        variant="standard"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <AccountCircle
                            sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField label="user" variant="standard" />
                    </Box>
                </Stack>
            </Box>

            <Stack spacing={2} direction="row">
                <TextField
                    label="amount"
                    variant="filled"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                Rp.
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="kilogram"
                    variant="outlined"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">kg</InputAdornment>
                        ),
                    }}
                />
                <TextField
                    variant="standard"
                    label="amount"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                Rp.
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">;</InputAdornment>
                        ),
                    }}
                />
                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        type={passwordVisible ? "text" : "password"}
                        variant="standard"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="visible password"
                                    onClick={() =>
                                        setPasswordVisible(!passwordVisible)
                                    }
                                >
                                    {passwordVisible ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <TextField
                    variant="filled"
                    label="password"
                    type={passwordVisible ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="visible password"
                                    onClick={() =>
                                        setPasswordVisible(!passwordVisible)
                                    }
                                >
                                    {passwordVisible ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
        </Stack>
    );
}

export default MuiTextField;
