import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

function MuiDialog() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button variant="outlined" onClick={() => setOpen(true)}>
                Dialog
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                <DialogTitle id="dialog-title">Are u sure delete?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-description">
                        if u delete, data permenently deleted
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={() => setOpen(false)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default MuiDialog;
