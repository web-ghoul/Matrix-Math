import Form from "@/components/Form/Form";
import Head from "@/components/Head/Head";
import { PrimaryBox } from "@/mui/Boxes/PrimaryBox";
import { PrimaryContainer } from "@/mui/Containers/PrimaryContainer";
import { Box } from "@mui/material";
import React from "react";

const LoginSection = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g50`}>
        <Head title={"Log In"} />
        <Box>
          <Form type={"login"} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default LoginSection;
