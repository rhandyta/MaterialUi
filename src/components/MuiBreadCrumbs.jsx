import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

function MuiBreadCrumbs() {
    return (
        <Box m={5}>
            <Breadcrumbs aria-label="breadcrumbs">
                <Link href="#" underline="hover">
                    Home
                </Link>
                <Link href="#" underline="hover">
                    Catalog
                </Link>
                <Link href="#" underline="hover">
                    Accessories
                </Link>
                <Typography>Shoes</Typography>
            </Breadcrumbs>
            <Breadcrumbs aria-label="breadcrumbs" separator="-">
                <Link href="#" underline="hover">
                    Home
                </Link>
                <Link href="#" underline="hover">
                    Catalog
                </Link>
                <Link href="#" underline="hover">
                    Accessories
                </Link>
                <Typography>Shoes</Typography>
            </Breadcrumbs>
            <Breadcrumbs
                aria-label="breadcrumbs"
                separator={<NavigateNext fontSize="small" />}
            >
                <Link href="#" underline="hover">
                    Home
                </Link>
                <Link href="#" underline="hover">
                    Catalog
                </Link>
                <Link href="#" underline="hover">
                    Accessories
                </Link>
                <Typography>Shoes</Typography>
            </Breadcrumbs>
            <Breadcrumbs
                aria-label="breadcrumbs"
                separator={<NavigateNext fontSize="small" />}
                maxItems={2}
            >
                <Link href="#" underline="hover">
                    Home
                </Link>
                <Link href="#" underline="hover">
                    Catalog
                </Link>
                <Link href="#" underline="hover">
                    Accessories
                </Link>
                <Typography>Shoes</Typography>
            </Breadcrumbs>
            <Breadcrumbs
                aria-label="breadcrumbs"
                separator={<NavigateNext fontSize="small" />}
                maxItems={3}
                itemsAfterCollapse={2}
            >
                <Link href="#" underline="hover">
                    Home
                </Link>
                <Link href="#" underline="hover">
                    Catalog
                </Link>
                <Link href="#" underline="hover">
                    Accessories
                </Link>
                <Typography>Shoes</Typography>
            </Breadcrumbs>
            <Breadcrumbs
                aria-label="breadcrumbs"
                separator={<NavigateNext fontSize="small" />}
                maxItems={3}
                itemsBeforeCollapse={2}
            >
                <Link href="#" underline="hover">
                    Home
                </Link>
                <Link href="#" underline="hover">
                    Catalog
                </Link>
                <Link href="#" underline="hover">
                    Accessories
                </Link>
                <Typography>Shoes</Typography>
            </Breadcrumbs>
        </Box>
    );
}

export default MuiBreadCrumbs;
