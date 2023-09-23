import { PrimaryLoadingButton } from "@/mui/Buttons/PrimaryLoadingButton";
import { Box, Typography } from "@mui/material";
import React from "react";
import back from "../../../public/assets/images/verify.jpg";
import { MuiOtpInput } from "mui-one-time-password-input";

const Verify = ({ handleChange,otp }) => {
  return (
    <>
      <Box className={`grid jcs aic g20`}>
        <Typography variant="h6" className={`fw500 ttcap`}>
          Enter the 6-digit code you received.
        </Typography>
        <MuiOtpInput autoFocus  length={6} value={otp} onChange={handleChange} />
        <PrimaryLoadingButton
          type="submit"
          loading={false}
          variant="text"
          className={`center_rel_x`}
        >
          Verify Account
        </PrimaryLoadingButton>
      </Box>
      <Box
        sx={{ backgroundImage: `url(${back.src})` }}
        className={`form_image`}
      ></Box>
    </>
  );
};

export default Verify;
