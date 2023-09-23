import Form from "@/components/Form/Form";
import Head from "@/components/Head/Head";
import { PrimaryBox } from "@/mui/Boxes/PrimaryBox";
import { PrimaryContainer } from "@/mui/Containers/PrimaryContainer";
import { Box } from "@mui/material";
import React from "react";
const VerifySection = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g50`}>
        <Head title={"Verify Your Account"} />
        <Box>
          <Form type={"verify_account"} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default VerifySection;
