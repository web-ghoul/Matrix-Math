import { PrimaryLoadingButton } from "@/mui/Buttons/PrimaryLoadingButton";
import { PrimaryTextField } from "@/mui/PrimaryTextField";
import { Box, Typography } from "@mui/material";
import React from "react";
import back from "../../../public/assets/images/register.jpg";
import Link from "next/link";

const Login = ({formik}) => {
  return (
    <>
      <Box className={`grid jcs aic g20`}>
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
        <PrimaryTextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <PrimaryLoadingButton
          type="submit"
          loading={false}
          loadingPosition="start"
          variant="text"
          className={`center_rel_x`}
        >
          Log In
        </PrimaryLoadingButton>
        <Link href={`${process.env.NEXT_PUBLIC_FORGOT_PASSWORD_PAGE}`}>
          <Typography variant="h6" className={`tal ttcap`} sx={{color:(theme)=>theme.palette.primary.main}}>Forgot your Password?</Typography>
        </Link>
      </Box>
      <Box
        sx={{ backgroundImage: `url(${back.src})` }}
        className={`form_image`}
      ></Box>
    </>
  );
};

export default Login;
