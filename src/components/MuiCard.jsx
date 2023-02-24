import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

function MuiCard() {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Box width="300px">
                    <Card>
                        <CardMedia
                            component="img"
                            height="150px"
                            title="I Sodeus preketek"
                            image="https://source.unsplash.com/random"
                            alt="i sodeus preketek"
                        />
                        <CardContent>
                            <Typography
                                variant="h5"
                                component="h4"
                                gutterBottom
                                fontWeight="700"
                            >
                                I Sodeus preketek
                            </Typography>
                            <Typography
                                variant="body1"
                                gutterBottom
                                textAlign="justify"
                            >
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Veniam accusantium
                                consequuntur libero iure excepturi reiciendis
                                autem soluta officiis nobis? Accusantium
                                asperiores fugiat, quam hic corporis unde
                                aspernatur inventore libero ducimus.
                            </Typography>
                            <CardActions>
                                <Button variant="outlined" size="small">
                                    Share
                                </Button>
                                <Button variant="contained" size="small">
                                    Learn more
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Box>
                <Box width="300px">
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar
                                    sx={{
                                        bgcolor: "red[500]",
                                    }}
                                    aria-label="recipe"
                                >
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton arial-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Shrimp naek kerta api"
                            subheader="september 16, 2020"
                        ></CardHeader>
                        <CardMedia
                            component="img"
                            height="150px"
                            title="I Sodeus preketek"
                            image="https://source.unsplash.com/random"
                            alt="i sodeus preketek"
                        />
                        <CardContent>
                            <Typography
                                variant="h5"
                                component="h4"
                                gutterBottom
                                fontWeight="700"
                            >
                                I Sodeus preketek
                            </Typography>
                            <Typography
                                variant="body1"
                                gutterBottom
                                textAlign="justify"
                            >
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Veniam accusantium
                                consequuntur libero iure excepturi reiciendis
                                autem soluta officiis nobis? Accusantium
                                asperiores fugiat, quam hic corporis unde
                                aspernatur inventore libero ducimus.
                            </Typography>
                            <CardActions>
                                <Button variant="outlined" size="small">
                                    Share
                                </Button>
                                <Button variant="contained" size="small">
                                    Learn more
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Box>
            </Stack>
        </>
    );
}

export default MuiCard;
