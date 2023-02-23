import { Box, Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoritBorderIcon from "@mui/icons-material/FavoriteBorder";
const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function MuiRating() {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState(0);
    const [hover, setHover] = useState("");
    const handleChange = (event, newValue) => {
        setRating(newValue);
    };

    const feedbackChange = (event, newFeedback) => {
        setFeedback(newFeedback);
    };
    return (
        <Stack direction="row" spacing={5} justifyContent="center">
            <Rating value={rating} onChange={handleChange} precision={0.5} />

            <Box>
                <Rating
                    value={feedback}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={feedbackChange}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={
                        <StarBorderOutlinedIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                        />
                    }
                />
                {feedback !== null && (
                    <Box sx={{ ml: 2 }}>
                        {labels[hover !== -1 ? hover : feedback]}
                    </Box>
                )}
            </Box>

            <Box>
                <Rating
                    icon={<FavoriteIcon color="error" />}
                    emptyIcon={<FavoritBorderIcon />}
                    defaultValue={5}
                    readOnly
                />
            </Box>
        </Stack>
    );
}

export default MuiRating;
