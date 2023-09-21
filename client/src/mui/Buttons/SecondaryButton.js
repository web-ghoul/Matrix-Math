import styled from "@emotion/styled";
import { PrimaryButton } from "./PrimaryButton";

export const SecondaryButton = styled(PrimaryButton)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white,
  },
}));
