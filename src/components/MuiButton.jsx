import React from "react";

import { Button, ButtonGroup, IconButton, Stack } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

function MuiButton() {
    return (
        <Stack spacing={5}>
            <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant="text" href="https://google.com">
                    Text
                </Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outline</Button>
            </Stack>

            <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" color="error">
                    Error
                </Button>
                <Button variant="contained" color="warning">
                    Warning
                </Button>
                <Button variant="contained" color="info">
                    Info
                </Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
            </Stack>

            <Stack
                spacing={2}
                direction="row"
                justifyContent="center"
                display="block"
            >
                <Button variant="outlined" size="small">
                    Small
                </Button>
                <Button variant="outlined" size="medium" padding="0px">
                    Medium
                </Button>
                <Button variant="outlined" size="large">
                    Large
                </Button>
            </Stack>

            <Stack
                spacing={2}
                direction="row"
                justifyContent="center"
                display="block"
            >
                <Button variant="contained" startIcon={<SendIcon />}>
                    Send
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
                <IconButton aria-label="send" size="large" color="primary">
                    <SendIcon />
                </IconButton>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    disableElevation
                    disableRipple
                >
                    Send
                </Button>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={(event) => alert("send")}
                >
                    Send
                </Button>
            </Stack>

            {/* Button Group */}

            <Stack direction="row" justifyContent="center">
                <ButtonGroup
                    variant="contained"
                    size="large"
                    aria-label="alignment button group"
                >
                    <Button>Left</Button>
                    <Button onClick={() => alert("Middle clicked")}>
                        Middle
                    </Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
        </Stack>
    );
}

export default MuiButton;
