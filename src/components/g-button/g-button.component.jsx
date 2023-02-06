import { Fragment } from "react";
import { Button } from "@mui/material";

const GButton = ({ btnName, btnStatus, endIcon, onClick }) => {
  return (
    <Fragment>
      <Button
        variant="contained"
        endIcon={endIcon}
        onClick={onClick}
        disabled={btnStatus}
      >
        {btnName}
      </Button>
    </Fragment>
  );
};

export default GButton;
