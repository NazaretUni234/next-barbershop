"use client";
import { Alert, Snackbar } from "@mui/material";
import { useNotification } from "@/hooks/globalHooks";

export default function AlertSystem() {
  const { closeNotification, message, show, type } = useNotification();
  return (
    <>
      <Snackbar
        open={show}
        autoHideDuration={5000}
        onClose={closeNotification}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ pt: 8 }}
      >
        <Alert
          onClose={closeNotification}
          severity={type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
