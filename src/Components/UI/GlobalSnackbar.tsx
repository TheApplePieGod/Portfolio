import * as React from "react";
import { Alert, Snackbar } from "@mui/material";
import { closeGlobalSnackbar } from "../../Redux/GlobalSnackbarSlice";
import { SnackbarStatus } from "../../Definitions/Definitions";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";

export const GlobalSnackbar = () => {
    const dispatch = useAppDispatch();

    const [cachedStatus, setCachedStatus] = React.useState(
        SnackbarStatus.Closed
    );

    const { status, message, closeDelay } = useAppSelector(
        (state) => state.globalSnackbar
    );

    const handleClose = () => {
        dispatch(closeGlobalSnackbar());
    };

    let severity: any = "info";
    switch (cachedStatus) {
        case SnackbarStatus.Error:
            severity = "error";
            break;
        case SnackbarStatus.Warning:
            severity = "warning";
            break;
        case SnackbarStatus.Info:
            severity = "info";
            break;
        case SnackbarStatus.Success:
            severity = "success";
            break;
    }

    // Cache the last non-closed status so that there are no visible artifacts when the snackbar is closing
    React.useEffect(() => {
        if (status != SnackbarStatus.Closed) setCachedStatus(status);
    }, [status]);

    return (
        <Snackbar
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }}
            open={status != SnackbarStatus.Closed}
            autoHideDuration={closeDelay}
            onClose={(e, reason) => {
                if (reason != "clickaway") handleClose();
            }}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                elevation={6}
                variant="filled"
            >
                {message}
            </Alert>
        </Snackbar>
    );
};
