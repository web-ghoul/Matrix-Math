import Form from "@/components/Form/Form";
import Head from "@/components/Head/Head";
import { PrimaryBox } from "@/mui/Boxes/PrimaryBox";
import { PrimaryContainer } from "@/mui/Containers/PrimaryContainer";
import { Box } from "@mui/material";
import React from "react";

const ForgotPasswordSection = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g50`}>
        <Head title={"Forgot Password"} />
        <Box>
          <Form type={"forgot_password"} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default ForgotPasswordSection;
