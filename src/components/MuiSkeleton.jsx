import { Skeleton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

function MuiSkeleton() {
    return (
        <>
            <Stack spacing={1} direction="column">
                <Skeleton variant="text" width={250} />
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    width={250}
                >
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton
                        variant="rounded"
                        width={40}
                        height={40}
                        animation={false}
                    />
                </Stack>
                <Skeleton
                    variant="text"
                    width={250}
                    height={150}
                    animation="wave"
                />
            </Stack>
        </>
    );
}

export default MuiSkeleton;
