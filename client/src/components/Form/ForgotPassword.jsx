import { PrimaryLoadingButton } from "@/mui/Buttons/PrimaryLoadingButton";
import { PrimaryTextField } from "@/mui/PrimaryTextField";
import { Box, Typography } from "@mui/material";
import React from "react";
import back from "../../../public/assets/images/forgot_password.jpg";

const ForgotPassword = ({ formik }) => {
  return (
    <>
      <Box className={`grid jcs aic g20`}>
        <Typography variant="h6" className={`fw500 ttcap`}>
          Enter the e-mail you used to create your account. If a linked account
          is found, you will receive a verification link.
        </Typography>
        <PrimaryTextField
          fullWidth
          id="email"
          name="email"
          label="E-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <PrimaryLoadingButton
          type="submit"
          loading={false}
          variant="text"
          className={`center_rel_x`}
        >
          Forgot Password
        </PrimaryLoadingButton>
      </Box>
      <Box
        sx={{ backgroundImage: `url(${back.src})` }}
        className={`form_image`}
      ></Box>
    </>
  );
};

export default ForgotPassword;
