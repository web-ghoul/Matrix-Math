import Form from "@/components/Form/Form";
import Head from "@/components/Head/Head";
import { PrimaryBox } from "@/mui/Boxes/PrimaryBox";
import { PrimaryContainer } from "@/mui/Containers/PrimaryContainer";
import { Box } from "@mui/material";
import React from "react";

const ResetPasswordSection = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g50`}>
        <Head title={"Reset Password"} />
        <Box>
          <Form type={"reset_password"} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default ResetPasswordSection;
