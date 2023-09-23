import { PrimaryLoadingButton } from "@/mui/Buttons/PrimaryLoadingButton";
import { PrimaryTextField } from "@/mui/PrimaryTextField";
import React from "react";

const Contact = ({ formik }) => {
  return (
    <>
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
        id="message"
        name="message"
        label="Message"
        multiline
        rows={4}
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
      <PrimaryLoadingButton
        type="submit"
        loading={false}
        variant="text"
        sx={{width:"max-content"}}
      >
        Submit
      </PrimaryLoadingButton>
    </>
  );
};

export default Contact;
