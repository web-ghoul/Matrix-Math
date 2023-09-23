import Form from "@/components/Form/Form";
import Head from "@/components/Head/Head";
import { TeacherContext } from "@/context/TeacherContext";
import { PrimaryBox } from "@/mui/Boxes/PrimaryBox";
import { SecondaryBox } from "@/mui/Boxes/SecondaryBox";
import { PrimaryContainer } from "@/mui/Containers/PrimaryContainer";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "./ContactSection.module.scss";

const ContactSection = () => {
  const { teacher_email, teacher_phone } = useContext(TeacherContext);
  return (
    <PrimaryBox>
      <PrimaryContainer
        className={`grid jcs aic g50 ${styles.contact_section_box}`}
      >
        <Head title={"Contact Us"} />
        <Box className={`grid jcs aifs g30 ${styles.contact_section_Form}`}>
          <Form type="contact" />
          <PrimaryBox className={`grid jcs aic g20 ${styles.contact_data_box}`}>
            <Box className={`flex jcfs flex_wrap aic g5`}>
              <Typography variant="h5">E-mail:</Typography>
              <Typography variant="h5" className={`fw400`}>
                {teacher_email}
              </Typography>
            </Box>
            <Box className={`flex jcfs flex_wrap aic g5`}>
              <Typography variant="h5">Telephone:</Typography>
              <Typography variant="h5" className={`fw400`}>
                {teacher_phone}
              </Typography>
            </Box>
          </PrimaryBox>
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default ContactSection;
