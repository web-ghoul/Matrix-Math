import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";

export const PrimaryLoadingButton = styled(LoadingButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white,
  borderRadius: "4px",
  transition: theme.palette.transition,
  borderColor: theme.palette.primary.main,
  borderStyle: "solid",
  borderWidth: "3px !important",
  fontFamily: "Ubuntu",
  padding: "8px 20px !important",
  "& svg": {
    color: theme.palette.white,
  },
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
    padding: "4px 5px !important",
  },
}));
