import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

function MuiLayout() {
    return (
        <>
            <Typography variant="h4" component="h1">
                Ini adalah Box dan Stack
            </Typography>
            <Box direction="column" border="1px solid grey" gap={5} mb={20}>
                <Box display="flex" gap={3}>
                    <Box component="span">Box</Box>
                    <Box
                        sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                            height: "200px",
                            width: "200px",
                            padding: "10px",
                            "&:hover": {
                                backgroundColor: "primary.light",
                            },
                            borderRadius: "10px",
                        }}
                    >
                        Box1
                    </Box>
                    <Box
                        border={{ border: "1px solid grey" }}
                        width={100}
                        height={100}
                        bgcolor={"primary.main"}
                        borderRadius="10px"
                        p="10px"
                        textAlign="left"
                    >
                        Box2
                    </Box>
                </Box>

                <Stack
                    width="100%"
                    height="250px"
                    spacing={2}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Box
                        width="100px"
                        height="100px"
                        bgcolor="primary.main"
                        borderRadius="10px"
                    ></Box>
                    <Box
                        width="100px"
                        height="100px"
                        bgcolor="error.main"
                        borderRadius="10px"
                    ></Box>
                    <Box
                        width="100px"
                        height="100px"
                        bgcolor="warning.main"
                        borderRadius="10px"
                    ></Box>
                </Stack>
            </Box>
            <Typography variant="h4" component="h1">
                Ini adalah Grid
            </Typography>
            <Grid
                container
                border="1px solid grey"
                my={2}
                rowSpacing={1}
                columnSpacing={4}
            >
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="warning.main">Item 1</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="warning.main">Item 2</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="warning.main">Item 3</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="warning.main">Item 4</Box>
                </Grid>
            </Grid>
        </>
    );
}

export default MuiLayout;
