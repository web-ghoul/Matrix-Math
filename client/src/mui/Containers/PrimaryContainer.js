import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const PrimaryContainer = styled(Container)(({ theme }) => ({
  maxWidth: "100% !important",
  paddingLeft: "80px !important",
  paddingRight: "80px !important",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "60px !important",
    paddingRight: "60px !important",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "40px !important",
    paddingRight: "40px !important",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
  },
  [theme.breakpoints.down("xs")]: {
    paddingLeft: "10px !important",
    paddingRight: "10px !important",
  },
}));
