import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "../store";
import { closeSnackBar, snackBarState } from "../store/slices/appSlice";

const SnackbarComp = () => {
  const { open, message, severity } = useSelector(snackBarState());
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeSnackBar());
  };

  return (
    open && (
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity={severity}
          sx={{ width: "100%" }}
          variant="filled"
          action={
            <IconButton
              size="small"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Snackbar>
    )
  );
};

export default SnackbarComp;
