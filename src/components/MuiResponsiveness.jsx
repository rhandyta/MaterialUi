import React from "react";

import { Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)(({ theme }) => ({
    height: "250px",
    width: "250px",
    backgroundColor: theme.palette.neutral?.darker,
}));

function MuiResponsiveness() {
    return (
        <>
            <Box
                sx={{
                    width: {
                        xs: 100,
                        sm: 200,
                        md: 300,
                        lg: 400,
                        xl: 500,
                    },
                    height: 300,
                    bgcolor: "secondary.dark",
                }}
            >
                MuiResponsiveness
            </Box>
            <StyledBox />
        </>
    );
}

export default MuiResponsiveness;
