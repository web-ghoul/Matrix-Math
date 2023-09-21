import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const SecondaryBox = styled(Box)(({ theme }) => ({
  paddingTop: "20px",
  paddingBottom: "20px",
  [theme.breakpoints.down("lg")]: {
    paddingBottom: "16px",
    paddingTop: "16px",
  },
  [theme.breakpoints.down("md")]: {
    paddingBottom: "14px",
    paddingTop: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  [theme.breakpoints.down("xs")]: {
    paddingBottom: "6px",
    paddingTop: "6px",
  },
}));
