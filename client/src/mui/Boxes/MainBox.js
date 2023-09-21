import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  paddingTop: "70px",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "65px",
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: "55px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "45px",
  },
}));
