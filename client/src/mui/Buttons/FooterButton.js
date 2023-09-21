import styled from "@emotion/styled";
import { SecondaryBorderButton } from "./SecondaryBorderButton";

export const FooterButton = styled(SecondaryBorderButton)(({ theme }) => ({
  borderColor: theme.palette.white,
  color: theme.palette.white,
  "&:hover": {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
  },
}));
