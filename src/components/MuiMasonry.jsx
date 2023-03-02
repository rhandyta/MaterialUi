import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Paper,
    Typography,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import { ExpandMore } from "@mui/icons-material";

const heights = [
    150, 130, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

function MuiMasonry() {
    return (
        <Box sx={{ width: 500, minHeight: 400 }}>
            <Masonry columns={4} spacing={1}>
                {heights.map((height, index) => (
                    <Paper
                        key={index}
                        sx={{
                            border: "1px solid",
                            // display: "flex",
                            // justifyContent: "center",
                            // alignItems: "center",
                            // height,
                        }}
                    >
                        <Accordion sx={{ minHeight: height }}>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography> Accordion {index + 1}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>Content</AccordionDetails>
                        </Accordion>
                    </Paper>
                ))}
            </Masonry>
        </Box>
    );
}

export default MuiMasonry;
