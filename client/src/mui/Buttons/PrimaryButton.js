import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "fit-content",
  color: theme.palette.white,
  borderRadius: "4px",
  transition: theme.palette.transition,
  borderColor: theme.palette.primary.main,
  borderStyle: "solid",
  borderWidth: "3px",
  padding: "8px 20px !important",
  fontFamily: "Ubuntu",
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("lg")]: {
    padding: "7px 15px !important",
  },
  [theme.breakpoints.down("md")]: {
    padding: "6px 10px !important",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "4px 10px !important",
  },
}));
