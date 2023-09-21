import { PrimaryContainer } from "@/mui/Containers/PrimaryContainer";
import React from "react";
import Logo from "../Logo/Logo";
import { AppBar, Box, Typography } from "@mui/material";
import { SecondaryBox } from "@/mui/Boxes/SecondaryBox";
import styles from "./Header.module.scss";
import Link from "next/link";
import { PrimaryBorderButton } from "@/mui/Buttons/PrimaryBorderButton";
import { SecondaryBorderButton } from "@/mui/Buttons/SecondaryBorderButton";

const Header = () => {
  return (
    <AppBar className={`${styles.header}`}>
      <SecondaryBox>
        <PrimaryContainer className={`flex jcsb aic g30`}>
          <Typography variant="h5">Matrix Math</Typography>
          <Box component={"nav"} className={`flex jcs aic g30 ${styles.links}`}>
            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_PAGE}`}>
              <Typography variant="h6" className={`fw500`}>Dashboard</Typography>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_BRANCHES_PAGE}`}>
              <Typography variant="h6" className={`fw500`}>Branches</Typography>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_TOP_STUDENTS_PAGE}`}>
              <Typography variant="h6" className={`fw500`}>Top Students</Typography>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_ABOUT_PAGE}`}>
              <Typography variant="h6" className={`fw500`}>About</Typography>
            </Link>
          </Box>
          <Box className={`flex jcs aic g20`}>
            <PrimaryBorderButton>Log in</PrimaryBorderButton>
            <SecondaryBorderButton>Register</SecondaryBorderButton>
          </Box>
        </PrimaryContainer>
      </SecondaryBox>
    </AppBar>
  );
};

export default Header;
