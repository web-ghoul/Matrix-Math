import { PrimaryLoadingButton } from "@/mui/Buttons/PrimaryLoadingButton";
import { PrimaryTextField } from "@/mui/PrimaryTextField";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import back from "../../../public/assets/images/register.jpg";
import Link from "next/link";

const Register = ({ formik }) => {
  return (
    <>
      <Box className={`grid jcs aic g30 form_halves`}>
        <Box className={`grid jcs aic g20`}>
          <PrimaryTextField
            fullWidth
            id="name"
            name="name"
            label="Full Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
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
            id="phone"
            name="phone"
            label="Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              sx={{ flexDirection: "row" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
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
          <Box className={`flex jcs aic g5`}>
            <Checkbox />
            <Typography
              component={"div"}
              variant="h6"
              className={`flex jcs aic g5 agree`}
            >
              I agree to{" "}
              <Link href={`${process.env.NEXT_PUBLIC_TERMS_AND_SERVICES_PAGE}`}>
                Terms
              </Link>{" "}
              &{" "}
              <Link href={`${process.env.NEXT_PUBLIC_PRIVACY_POLICY_PAGE}`}>
                Conditions
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ backgroundImage: `url(${back.src})` }}
          className={`form_image`}
        ></Box>
      </Box>
      <PrimaryLoadingButton
        type="submit"
        loading={false}
        variant="text"
        className={`center_rel_x`}
      >
        Sign Up
      </PrimaryLoadingButton>
    </>

    // <>
    //   <Box className={`grid jcs aic g30 form_triples`}>
    //     <Box className={`flex jcc aic g10 grade pad50`}>
    //       <Typography variant="h5" className={`flex jcc aic grade_number`}>
    //         1
    //       </Typography>
    //       <Typography variant="h5" className={`ttuc`}>
    //         First Year
    //       </Typography>
    //     </Box>
    //     <Box className={`flex jcc aic g10 grade pad50`}>
    //       <Typography variant="h5" className={`flex jcc aic grade_number`}>
    //         2
    //       </Typography>
    //       <Typography variant="h5" className={`ttuc`}>
    //         Second Year
    //       </Typography>
    //     </Box>
    //     <Box className={`flex jcc aic g10 grade pad50`}>
    //       <Typography variant="h5" className={`flex jcc aic grade_number`}>
    //         3
    //       </Typography>
    //       <Typography variant="h5" className={`ttuc`}>
    //         Third Year
    //       </Typography>
    //     </Box>
    //   </Box>
    //   <PrimaryLoadingButton
    //     type="submit"
    //     loading={false}
    //     variant="text"
    //     className={`center_rel_x`}
    //     sx={{ width: "fit-content" }}
    //   >
    //     Let's Get Started
    //   </PrimaryLoadingButton>
    // </>
  );
};

export default Register;
