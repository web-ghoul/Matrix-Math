import Form from "@/components/Form/Form";
import Head from "@/components/Head/Head";
import { PrimaryBox } from "@/mui/Boxes/PrimaryBox";
import { PrimaryContainer } from "@/mui/Containers/PrimaryContainer";
import { Box, Typography } from "@mui/material";
import React from "react";

const RegisterSection = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g50`}>
        <Box className={`grid jcs aic g20`}>
          <Head title={"SIGN UP"} />
          <Typography variant="h5" className={`tac ttcap fw400`}>
            Welcome to Matrix Math! Create your account in just a few simple
            steps.
          </Typography>
        </Box>
        <Box>
          <Form type={"register"} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default RegisterSection;
