import { PrimaryLoadingButton } from "@/mui/Buttons/PrimaryLoadingButton";
import { PrimaryTextField } from "@/mui/PrimaryTextField";
import { Box, Typography } from "@mui/material";
import React from "react";
import back from "../../../public/assets/images/reset_password.jpg";

const ResetPassword = ({ formik }) => {
  return (
    <>
      <Box className={`grid jcs aic g20`}>
        <PrimaryTextField
          fullWidth
          id="password"
          name="password"
          type="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <PrimaryTextField
          fullWidth
          id="confirm_password"
          name="confirm_password"
          type="password"
          label="Re-type Password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirm_password &&
            Boolean(formik.errors.confirm_password)
          }
          helperText={
            formik.touched.confirm_password && formik.errors.confirm_password
          }
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

export default ResetPassword;
