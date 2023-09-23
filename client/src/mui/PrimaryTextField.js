import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const PrimaryTextField = styled(TextField)(({ theme }) => ({
  "& > div": {
    backgroundColor: theme.palette.white,
    borderColor: theme.palette.gray,
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "10px",
    [theme.breakpoints.down("lg")]: {
      borderRadius: "8px",
    },
    [theme.breakpoints.down("md")]: {
      borderRadius: "6px",
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: "4px",
    },
  },
  "& label": {
    lineHeight: "2em !important",
    fontSize: "18px",
    [theme.breakpoints.down("lg")]: {
      lineHeight: "1.8em !important",
      fontSize: "16px",
    },
    [theme.breakpoints.down("md")]: {
      lineHeight: "1em !important",
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: "0.7em !important",
      fontSize: "12px",
    },
  },
  "& input": {
    fontSize: "20px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px",
      padding: "14px",
      borderRadius: "8px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      padding: "12px",
      borderRadius: "6px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      padding: "10px",
      borderRadius: "4px",
    },
  },
}));
