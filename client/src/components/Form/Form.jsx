import React from "react";
import "./Form.scss";
import Contact from "./Contact";
import { useFormik } from "formik";
import * as yup from 'yup';

const Form = ({ type }) => {
  const contactValidationSchema = yup.object({
    name: yup.string("Enter your name").required("name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    message: yup.string("Enter your message").required("message is required"),
  });
  const contactInitialValues = {
    name: "",
    email: "",
    message: "",
  };
  const contactFormik = useFormik({
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: (values, { resetSubmit }) => {},
  });
  return (
    <form className={`grid jcs aic g30`} onSubmit={type === "contact" && contactFormik.handleSubmit}>
      {type === "contact" && <Contact formik={contactFormik} />}
    </form>
  );
};

export default Form;
