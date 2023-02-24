import React, { useState } from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function MuiAccordin() {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false);
    };
    console.log(expanded);
    return (
        <Box>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={(event, isExpanded) =>
                    handleChange(isExpanded, "panel1")
                }
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur id explicabo delectus dolorem consequuntur,
                        aut non quisquam magnam quam, consectetur voluptatem
                        quis tenetur nostrum fugit in quaerat esse eos possimus.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={(event, isExpanded) =>
                    handleChange(isExpanded, "panel2")
                }
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur id explicabo delectus dolorem consequuntur,
                        aut non quisquam magnam quam, consectetur voluptatem
                        quis tenetur nostrum fugit in quaerat esse eos possimus.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel3"}
                onChange={(event, isExpanded) =>
                    handleChange(isExpanded, "panel3")
                }
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur id explicabo delectus dolorem consequuntur,
                        aut non quisquam magnam quam, consectetur voluptatem
                        quis tenetur nostrum fugit in quaerat esse eos possimus.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default MuiAccordin;
