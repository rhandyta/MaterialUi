import { Alert, Button, Snackbar } from "@mui/material";
import React, { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef(function (props, ref) {
    return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MuiSnackbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Toast
            </Button>
            {/* <Snackbar
                open={open}
                autoHideDuration={3000}
                message="Click Successfully"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                onClose={(event, reason) => {
                    if (reason === "clickaway") {
                        console.log(reason);
                        return;
                    }
                    setOpen(false);
                }}
            /> */}

            <Snackbar
                open={open}
                autoHideDuration={4000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                onClose={(event, reason) => {
                    if (reason === "clickaway") {
                        return;
                    }
                    setOpen(false);
                }}
            >
                <SnackbarAlert
                    severity="success"
                    onClose={(event, reason) => {
                        if (reason === "clickaway") {
                            return;
                        }
                        setOpen(false);
                    }}
                >
                    Custom snackbar successfully
                </SnackbarAlert>
            </Snackbar>
        </>
    );
}

export default MuiSnackbar;
