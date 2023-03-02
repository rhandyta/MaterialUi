import React, { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Favorite } from "@mui/icons-material";

function MuiTabs() {
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <TabContext value={value}>
                <Box
                    sx={{ borderBottom: 1, borderColor: "devider", width: 300 }}
                >
                    <TabList
                        aria-label="tab example"
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        // centered
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab
                            label="Tab 1"
                            value="1"
                            icon={<Favorite />}
                            iconPosition="start"
                        />
                        <Tab label="Tab 2" value="2" disabled />
                        <Tab label="Tab 3" value="3" />
                        <Tab label="Tab 4" value="4" />
                        <Tab label="Tab 5" value="5" />
                        <Tab label="Tab 6" value="6" />
                    </TabList>
                </Box>
                <TabPanel value="1">Tab 1</TabPanel>
                <TabPanel value="2">Tab 2</TabPanel>
                <TabPanel value="3">Tab 3</TabPanel>
                <TabPanel value="4">Tab 4</TabPanel>
                <TabPanel value="5">Tab 5</TabPanel>
                <TabPanel value="6">Tab 6</TabPanel>
            </TabContext>
        </Box>
    );
}

export default MuiTabs;
