import React from "react";
import Alert from "@mui/material/Alert";

const ErrorAlert = ({ errors }) => {
  return (
    <>
      {errors.name && (
        <Alert
          variant="filled"
          severity="error"
          style={{ margin: "10px auto", width: "50%" }}
        >
          {errors.name.message}
        </Alert>
      )}
      {errors.age && (
        <Alert
          variant="filled"
          severity="error"
          style={{ margin: "10px auto", width: "50%" }}
        >
          {errors.age.message}
        </Alert>
      )}
      {errors.mobile && (
        <Alert
          variant="filled"
          severity="error"
          style={{ margin: "10px auto", width: "50%" }}
        >
          {errors.mobile.message}
        </Alert>
      )}
      {errors.emergency_no && (
        <Alert
          variant="filled"
          severity="error"
          style={{ margin: "10px auto", width: "50%" }}
        >
          {errors.emergency_no.message}
        </Alert>
      )}
      {errors.govtId && (
        <Alert
          variant="filled"
          severity="error"
          style={{ margin: "10px auto", width: "50%" }}
        >
          {errors.govtId.message}
        </Alert>
      )}
      {errors.issueId && (
        <Alert
          variant="filled"
          severity="error"
          style={{ margin: "10px auto", width: "50%" }}
        >
          {errors.issueId.message}
        </Alert>
      )}
    </>
  );
};

export { ErrorAlert };
