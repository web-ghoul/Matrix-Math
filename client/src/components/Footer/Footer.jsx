import React, { useContext } from "react";
import styles from "./Footer.module.scss";
import { PrimaryBox } from "@/mui/Boxes/PrimaryBox";
import { Box, Tooltip, Typography } from "@mui/material";
import { FooterIconButton } from "@/mui/Buttons/FooterIconButton";
import { FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
import { Google, Telegram, Twitter, YouTube } from "@mui/icons-material";
import { PrimaryContainer } from "@/mui/Containers/PrimaryContainer";
import Link from "next/link";
import Foot from "./Foot";
import { TeacherContext } from "@/context/TeacherContext";
import { FooterButton } from "@/mui/Buttons/FooterButton";
const Footer = () => {
  const { teacher_email, teacher_phone } = useContext(TeacherContext);
  return (
    <>
      <PrimaryBox component={"footer"} className={` ${styles.footer}`}>
        <PrimaryContainer
          className={`flex jcsb flex_wrap aifs g50 ${styles.footer_contain}`}
        >
          <Box className={`grid jcfs aic g20`}>
            <Typography variant="h5">Matrix Math</Typography>
            <Typography variant="h5">
              Secondary education re-imagined.
            </Typography>
            <Box className={`flex jcfs aic g10 flex_wrap`}>
              <Tooltip title={"Google"}>
                <FooterIconButton>
                  <Google />
                </FooterIconButton>
              </Tooltip>
              <Tooltip title={"Twitter"}>
                <FooterIconButton>
                  <Twitter />
                </FooterIconButton>
              </Tooltip>
              <Tooltip title={"Facebook"}>
                <FooterIconButton>
                  <FaFacebookF />
                </FooterIconButton>
              </Tooltip>
              <Tooltip title={"Messanger"}>
                <FooterIconButton>
                  <FaFacebookMessenger />
                </FooterIconButton>
              </Tooltip>
              <Tooltip title={"Telegram"}>
                <FooterIconButton>
                  <Telegram />
                </FooterIconButton>
              </Tooltip>
              <Tooltip title={"Youtube"}>
                <FooterIconButton>
                  <YouTube />
                </FooterIconButton>
              </Tooltip>
            </Box>
          </Box>
          <Box className={`grid jcfs aic g20`}>
            <Typography variant="h5" data-testid="quick_links">
              Quick Links
            </Typography>
            <Box className={`grid jcfs aic g10 ${styles.links}`}>
              <Link href={`${process.env.NEXT_PUBLIC_ABOUT_PAGE}`}>
                <Typography variant="h6" className={`fw500`}>
                  About Us
                </Typography>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_ANNOUNCEMENTS_PAGE}`}>
                <Typography variant="h6" className={`fw500`}>
                  Announcements
                </Typography>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_TOP_STUDENTS_PAGE}`}>
                <Typography variant="h6" className={`fw500`}>
                  Top Students
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box className={`grid jcfs aic g20`}>
            <Typography variant="h5" data-testid="legal">
              Legal
            </Typography>
            <Box className={`grid jcfs aic g10 ${styles.links}`}>
              <Link href={`${process.env.NEXT_PUBLIC_TERMS_AND_SERVICES_PAGE}`}>
                <Typography variant="h6" className={`fw500`}>
                  Terms and Services
                </Typography>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_PRIVACY_POLICY_PAGE}`}>
                <Typography variant="h6" className={`fw500`}>
                  Privacy Policy
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box className={`grid jcfs aic g20`}>
            <Typography variant="h5" data-testid="contact">
              Contact
            </Typography>
            <Box className={`grid jcfs aic g20 ${styles.contact}`}>
              <Box className={`flex jcfs aic g10`}>
                <Typography variant="h6">E-mail:</Typography>
                <Typography variant="h6" data-testid="teacher_email">
                  {teacher_email}
                </Typography>
              </Box>
              <Box className={`flex jcfs aic g10`}>
                <Typography variant="h6">Telephone:</Typography>
                <Typography variant="h6" data-testid="teacher_phone">
                  {teacher_phone}
                </Typography>
              </Box>
            </Box>
            <FooterButton
              data-testid="send_button"
              onClick={() =>
                router.push(`${process.env.NEXT_PUBLIC_CONTACT_US_PAGE}`)
              }
            >
              Send a Message
            </FooterButton>
          </Box>
        </PrimaryContainer>
      </PrimaryBox>
      <Foot />
    </>
  );
};

export default Footer;
