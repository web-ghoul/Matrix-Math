import { PrimaryContainer } from "@/mui/Containers/PrimaryContainer";
import React from "react";
import Logo from "../Logo/Logo";
import { AppBar, Box, Typography } from "@mui/material";
import { SecondaryBox } from "@/mui/Boxes/SecondaryBox";
import styles from "./Header.module.scss";
import Link from "next/link";
import { PrimaryBorderButton } from "@/mui/Buttons/PrimaryBorderButton";
import { SecondaryBorderButton } from "@/mui/Buttons/SecondaryBorderButton";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <AppBar className={`${styles.header}`}>
      <SecondaryBox>
        <PrimaryContainer className={`flex jcsb aic g30`}>
          <Typography variant="h5">Matrix Math</Typography>
          <Box component={"nav"} className={`flex jcs aic g30 ${styles.links}`}>
            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_PAGE}`}>
              <Typography variant="h6" className={`fw500 ttuc`}>
                Dashboard
              </Typography>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_BRANCHES_PAGE}`}>
              <Typography variant="h6" className={`fw500 ttuc`}>
                Branches
              </Typography>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_TOP_STUDENTS_PAGE}`}>
              <Typography variant="h6" className={`fw500 ttuc`}>
                Top Students
              </Typography>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_ABOUT_PAGE}`}>
              <Typography variant="h6" className={`fw500 ttuc`}>
                About
              </Typography>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_CONTACT_US_PAGE}`}>
              <Typography variant="h6" className={`fw500 ttuc`}>
                Contact Us
              </Typography>
            </Link>
          </Box>
          <Box className={`flex jcs aic g20`}>
            <PrimaryBorderButton
              onClick={() =>
                router.push(`${process.env.NEXT_PUBLIC_LOGIN_PAGE}`)
              }
            >
              Log in
            </PrimaryBorderButton>
            <SecondaryBorderButton
              onClick={() =>
                router.push(`${process.env.NEXT_PUBLIC_REGISTER_PAGE}`)
              }
            >
              Register
            </SecondaryBorderButton>
          </Box>
        </PrimaryContainer>
      </SecondaryBox>
    </AppBar>
  );
};

export default Header;
