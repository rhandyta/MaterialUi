import { Box } from "@mui/material";
import React from "react";

function MuiLayout() {
    return (
        <Box spacing={5} direction="column">
            <Box display="flex" gap={2}>
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
        </Box>
    );
}

export default MuiLayout;
