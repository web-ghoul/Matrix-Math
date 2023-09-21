import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const PrimaryBox = styled(Box)(({ theme }) => ({
  paddingTop: "40px",
  paddingBottom: "40px",
  [theme.breakpoints.down("lg")]: {
    paddingBottom: "35px",
    paddingTop: "35px",
  },
  [theme.breakpoints.down("md")]: {
    paddingBottom: "30px",
    paddingTop: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "20px",
    paddingTop: "20px",
  },
  [theme.breakpoints.down("xs")]: {
    paddingBottom: "10px",
    paddingTop: "10px",
  },
}));
