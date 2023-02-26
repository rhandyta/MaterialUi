import {
    ExpandLess,
    ExpandMore,
    Mail,
    Person,
    Settings,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
} from "@mui/material";
import React, { useState } from "react";

function MuiList() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !open);
    };
    return (
        <Stack spacing={5} direction="column">
            <Box sx={{ width: 250, bgcolor: "#efef" }}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Mail />
                        </ListItemIcon>
                        <ListItemText>List Item 1</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mail />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText secondary="Secondary text">
                            List Item 2
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Mail />
                            </ListItemIcon>
                            <ListItemText secondary="Secondary text">
                                List Item 3
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>

            <Box sx={{ width: 250, bgcolor: "#3434" }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Mail />
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText
                                primary="Mailer"
                                secondary="Rodgers"
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding onClick={handleClick}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Settings />
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disabledPadding>
                            <ListItemButton sx={{ pl: 5 }}>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText primary="Accounts" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </Stack>
    );
}

export default MuiList;
