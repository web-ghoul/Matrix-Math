import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const FooterIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  borderColor: theme.palette.white,
  color: theme.palette.primary.main,
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  borderWidth: "3px",
  borderStyle: "solid",
  display: "flex",
  justifyContent: "center",
  fontFamily:"Ubuntu",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.white,
  },
  "& svg": {
    fontSize: "25px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "38px",
    height: "38px",
    "& svg": {
      fontSize: "22px",
    },
  },
  [theme.breakpoints.down("md")]: {
    borderWidth: "2px",
    width: "36px",
    height: "36px",
    "& svg": {
      fontSize: "20px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    borderWidth: "2px",
    width: "32px",
    height: "32px",
    "& svg": {
      fontSize: "18px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    width: "30px",
    height: "30px",
    "& svg": {
      fontSize: "16px",
    },
  },
}));
