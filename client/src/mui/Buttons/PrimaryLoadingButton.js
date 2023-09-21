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
  paddingLeft: "20px !important",
  paddingRight: "20px !important",
  "& svg": {
    color: theme.palette.white,
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "10px !important",
    paddingRight: "10px !important",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "5px !important",
    paddingRight: "5px !important",
  },
}));
