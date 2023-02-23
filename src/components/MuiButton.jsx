import React, { useState } from "react";

import {
    Button,
    ButtonGroup,
    IconButton,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

function MuiButton() {
    const [formats, setFormats] = useState(null);
    console.log(formats);
    const handlerFormatChange = (value, newFormat) => {
        setFormats(newFormat);
    };

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
                    color="success"
                    orientation="vertical"
                >
                    <Button>Left</Button>
                    <Button onClick={() => alert("Middle clicked")}>
                        Middle
                    </Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack justifyContent="center" direction="row">
                <ToggleButtonGroup
                    value={formats}
                    onChange={handlerFormatChange}
                    aria-label="formatting toggle button"
                    color="warning"
                    size="small"
                    orientation="vertical"
                    exclusive
                >
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>

                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underline" aria-label="underline">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
}

export default MuiButton;
