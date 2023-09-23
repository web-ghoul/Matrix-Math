import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  paddingTop: "80px",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "70px",
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "45px",
  },
}));
